const eventBus = {
    on(event: string, callback: (arg: any) => void) {
        document.addEventListener(event, (e) => callback(e))
    },
    dispatch(event: string) {
        document.dispatchEvent(new CustomEvent(event))
    },
    remove(event: string, callback: (arg: any) => void) {
        document.removeEventListener(event, (e) => callback(e))
    },
}

export default eventBus
