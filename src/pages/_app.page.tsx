import { DefaultPageLayout } from '@components/on-demand'
import { AntdContextRoot, GA, SEO, SSRErrorHandleContainer } from '@components/utils'
import wrapper from '@store/configureStore'
import { COLOR } from '@styles/color'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { PageLoading } from '@components/core/layout'

import '../styles/globals.scss'

type PagePermissionInfoEnabledComponentConfig = {
    permission: PagePermissionInfo
}

type NextComponentWithPermission = NextComponentType<NextPageContext, any, unknown> &
    Partial<PagePermissionInfoEnabledComponentConfig>

interface CustomAppProps extends AppProps {
    Component: NextComponentWithPermission
}

function App({ Component, pageProps, router: { route } }: CustomAppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: 2,
                    },
                },
            }),
    )
    const ALLOWED_ONLY_TO_MEMBERS = ['/submission', '/problem/[id]/submit', '/settings'] as const
    const isPermissionRequired = ALLOWED_ONLY_TO_MEMBERS.some((path) => route.startsWith(path))

    const pagePermissionInfo = {
        role: Component.permission?.role ?? 'member',
        loadingFallback: Component.permission?.loadingFallback ?? <PageLoading />,
        redirect: Component.permission?.redirect ?? '/sign-in',
    }

    return (
        <QueryClientProvider client={queryClient}>
            <SEO />
            <GA.TrackingRoutePath />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: COLOR.primary,
                    },
                }}
            >
                <AntdContextRoot />
                <DefaultPageLayout>
                    <SSRErrorHandleContainer
                        error={pageProps.error}
                        pagePermissionInfo={pagePermissionInfo}
                        isPermissionRequired={isPermissionRequired}
                    >
                        <Component {...pageProps} />
                    </SSRErrorHandleContainer>
                </DefaultPageLayout>
            </ConfigProvider>
        </QueryClientProvider>
    )
}

export default wrapper.withRedux(App)
