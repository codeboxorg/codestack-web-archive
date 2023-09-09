import Router from 'next/router'
import { useEffect } from 'react'

function GAInit() {
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
                id='google-analytics'
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
                }}
            />
        </>
    )
}

const changeRouteGtag = (url: string) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
    })
}

function GATrackingRoutePath() {
    useEffect(() => {
        Router.events.on('routeChangeComplete', changeRouteGtag)
        return () => {
            Router.events.off('routeChangeComplete', changeRouteGtag)
        }
    }, [])
    return null
}

export default Object.assign(GAInit, {
    TrackingRoutePath: GATrackingRoutePath,
})
