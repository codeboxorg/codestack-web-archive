import { DefaultSeo, DefaultSeoProps } from 'next-seo'

const DEFAULT_SEO: DefaultSeoProps = {
  title: 'CodeStack',
  description: '다 같이 성장하는 코딩테스트 연습 플랫폼',
  canonical: 'https://www.codestack.co.kr',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.codestack.co.kr',
    title: 'CodeStack',
    site_name: 'CodeStack',
    images: [
      {
        url: 'https://codebox-dev.s3.ap-northeast-2.amazonaws.com/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'image',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

const Seo = () => {
  return <DefaultSeo {...DEFAULT_SEO} />
}

export default Seo
