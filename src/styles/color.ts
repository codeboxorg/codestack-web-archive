import { theme } from 'twin.macro'

export const COLOR = {
    primary: theme`colors.primary`,
} as const

export type ColorKey = keyof typeof COLOR
