import { DefaultSeo, DefaultSeoProps } from 'next-seo'

const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: '%s | CodeStack',
  title: '다 함께 성장하는 코딩 테스트 연습 플랫폼',
  description:
    '다 함께 성장하는 코딩 테스트 연습 플랫폼 | CodeStack과 함께 목표를 설정하고 같이 문제를 풀어나가보아요! | 오늘의 문제 및 문제 추천 기능을 통해 효율적으로 공부할 수 있어요',
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
