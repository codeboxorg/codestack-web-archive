import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@components/layout'
import wrapper from '@store/configureStore'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = ({ Component, pageProps }: AppProps) => {
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

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(App)
