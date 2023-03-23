import Router from 'next/router'
import { useEffect } from 'react'

const GAInit = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></script>
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
        }}
      ></script>
    </>
  )
}

const changeRouteGtag = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  })
}

const GATrackingRoutePath = () => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', changeRouteGtag)
    return () => {
      Router.events.off('routeChangeComplete', changeRouteGtag)
    }
  }, [])
  return <></>
}

export const GA = Object.assign(GAInit, {
  TrackingRoutePath: GATrackingRoutePath,
})
