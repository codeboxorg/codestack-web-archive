import { NextRouter } from 'next/router'

type RoutePaths = import('constant/routePath').ROUTE_PATH

type RoutePushMethod = (path: RoutePaths) => Promise<boolean>

declare module 'next/router' {
  function useRouter(): NextRouter & { push: RoutePushMethod }
}
