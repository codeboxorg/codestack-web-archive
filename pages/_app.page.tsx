import AuthChecker from '@components/auth/AuthChecker'
import Layout from '@components/layout'
import wrapper from '@store/configureStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { NextComponentType, NextPageContext } from 'next'
import { StyleProvider } from '@ant-design/cssinjs'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import '../styles/globals.scss'
import SSRErrorHandleContainer from '@components/error/SSRErrorHandleContainer'

type PagePermissionInfoEnabledComponentConfig = {
  permission: PagePermissionInfo
}

type NextComponentWithPermission = NextComponentType<NextPageContext, any, {}> &
  Partial<PagePermissionInfoEnabledComponentConfig>

interface CustomAppProps extends AppProps {
  Component: NextComponentWithPermission
}

const ALLOWED_ONLY_TO_MEMBERS = ['/submission']

const App = ({ Component, pageProps, router: { route } }: CustomAppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 2,
          },
        },
      })
  )

  const isPermissionRequired = ALLOWED_ONLY_TO_MEMBERS.some((path) =>
    route.startsWith(path)
  )

  const pagePermissionInfo = {
    role: Component.permission?.role ?? 'member',
    loadingFallback: Component.permission?.loadingFallback ?? (
      <div>page Permission Checking...</div>
    ),
    redirect: Component.permission?.redirect ?? '/login',
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthChecker />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#3b82f6',
          },
        }}
      >
        <StyleProvider hashPriority="high">
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
