const renderEnv = {
  get isCSR() {
    return typeof window !== 'undefined'
  },
  get isSSR() {
    return typeof window === 'undefined'
  },
}

export default renderEnv
