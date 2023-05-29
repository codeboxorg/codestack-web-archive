interface PopCenterParams {
    url: string
    title: string
    w: number
    h: number
}

const popupCenter = ({ url, title, w, h }: PopCenterParams) => {
    const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width
    const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height

    const left = (width - w) / 2
    const top = (height - h) / 2
    window.open(url, title, `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`)
}

export { popupCenter }
