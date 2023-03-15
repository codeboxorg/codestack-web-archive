export const ROUTE_PATH = {
  LANDING: '/',
  HOME: '/home',
  LOGIN: '/login',
  PROBLEM: '/problem',
  SUBMISSION: '/submission',
} as const
export type ROUTE_PATH = Values<typeof ROUTE_PATH>

export const ALLOWED_ONLY_TO_MEMBERS = [
  '/submission',
  '/problem/[id]/submit',
] as const
