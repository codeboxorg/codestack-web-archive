import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@components/layout'
import wrapper from '@store/configureStore'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContainer from '@components/auth/AuthContainer'
import AuthChecker from '@components/auth/AuthChecker'
import { NextComponentType, NextPageContext } from 'next'

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
  const memberRequireAuth = ALLOWED_ONLY_TO_MEMBERS.some((path) =>
    route.startsWith(path)
  )
  const renderAuthorizedComponent = () => {
    if (memberRequireAuth) {
      return (
        <AuthContainer pagePermissionInfo={Component.permission}>
          <Component {...pageProps} />
        </AuthContainer>
      )
    }
    return <Component {...pageProps} />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthChecker />
      <Layout>{renderAuthorizedComponent()}</Layout>
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(App)
