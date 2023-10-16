type EventCallback = (arg: any) => void

const on = (event: string, callback: EventCallback) => {
    document.addEventListener(event, (e) => callback(e))
}

const dispatch = (event: string) => {
    document.dispatchEvent(new CustomEvent(event))
}

const remove = (event: string, callback: EventCallback) => {
    document.removeEventListener(event, (e) => callback(e))
}

export const EventBus = {
    on,
    dispatch,
    remove,
}
