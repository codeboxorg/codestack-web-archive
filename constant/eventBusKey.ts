export const EVENT_BUS_KEY = {
  UNAUTHORIZED_ERROR: 'EVENT_BUS:UNAUTHORIZED_ERROR',
} as const

export type EVENT_BUS_KEY = Values<typeof EVENT_BUS_KEY>
