export const RenderEnvironment = {
    get isCSR() {
        return typeof window !== 'undefined'
    },
    get isSSR() {
        return typeof window === 'undefined'
    },
}
