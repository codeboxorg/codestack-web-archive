export const ROUTE_PATH = {
  LANDING: '/',
  HOME: '/home',
} as const

export type ROUTE_PATH = Values<typeof ROUTE_PATH>
