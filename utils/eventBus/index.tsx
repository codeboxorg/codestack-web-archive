const eventBus = {
  on(event: string, callback: Function) {
    document.addEventListener(event, (e) => callback(e))
  },
  dispatch(event: string) {
    document.dispatchEvent(new CustomEvent(event))
  },
  remove(event: string, callback: Function) {
    document.removeEventListener(event, (e) => callback(e))
  },
}

export default eventBus
