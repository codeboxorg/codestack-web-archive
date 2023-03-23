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
        url: 'https://avatars.githubusercontent.com/u/118671678?s=400&v=4',
        width: 100,
        height: 50,
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
