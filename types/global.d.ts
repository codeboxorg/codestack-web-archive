export {}

type RoutePaths = import('constant/routePath').ROUTE_PATH

declare global {
  interface Location {
    replace(url: RoutePaths): void
  }
}
