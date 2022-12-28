export const ROUTE_PATH = {
  LANDING: '/',
  HOME: '/home',
  LOGIN: '/login',
  PROBLEM: '/problem',
  SUBMISSION: '/submission',
} as const

export type ROUTE_PATH = Values<typeof ROUTE_PATH>
