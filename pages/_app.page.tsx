import { StyleProvider } from '@ant-design/cssinjs'
import AntdContextRoot from '@components/app/AntdContextRoot'
import { GA } from '@components/app/GA'
import SEO from '@components/app/SEO'
import AuthChecker from '@components/auth/AuthChecker'
import SSRErrorHandleContainer from '@components/error/SSRErrorHandleContainer'
import Layout from '@components/layout'
import PageLoading from '@components/shared/PageLoading'
import wrapper from '@store/configureStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { ALLOWED_ONLY_TO_MEMBERS } from 'constant/routePath'
import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import '../styles/globals.scss'
import { COLOR } from '@styles/color'

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

    const isPermissionRequired = ALLOWED_ONLY_TO_MEMBERS.some((path) => route.startsWith(path))

    const pagePermissionInfo = {
        role: Component.permission?.role ?? 'member',
        loadingFallback: Component.permission?.loadingFallback ?? <PageLoading />,
        redirect: Component.permission?.redirect ?? '/login',
    }

    return (
        <QueryClientProvider client={queryClient}>
            <SEO />
            <GA.TrackingRoutePath />
            <AuthChecker />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: COLOR.primary,
                    },
                }}
            >
                <StyleProvider hashPriority='high'>
                    <AntdContextRoot />
                    <Layout>
                        <SSRErrorHandleContainer
                            error={pageProps.error}
                            pagePermissionInfo={pagePermissionInfo}
                            isPermissionRequired={isPermissionRequired}
                        >
                            <Component {...pageProps} />
                        </SSRErrorHandleContainer>
                    </Layout>
                </StyleProvider>
            </ConfigProvider>
        </QueryClientProvider>
    )
}

export default wrapper.withRedux(App)
