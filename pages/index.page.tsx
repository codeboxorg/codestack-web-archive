import { message } from 'antd'
import Link from 'next/link'
import MainBanner from './MainBanner'
import { NextSeo } from 'next-seo'

const Landing = () => {
  return (
    <>
      <NextSeo title={`메인`} />
      <MainBanner />
      <div className="pt-40">
        <h2 className="text-2xl font-bold">오늘의 문제 보러가기</h2>
        <p className="mt-5 text-gray-500">
          오늘도 같이 문제 해결하러 가볼까요~?
        </p>
        <Link href={'/problem'}>
          <button className="px-20 py-10 mt-15 border-1 rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors transition-300">
            오늘의 문제
          </button>
        </Link>
      </div>
      <div className="pt-40 pb-100">
        <h2 className="text-2xl font-bold">문제 추천 설정하기</h2>
        <p className="mt-5 text-gray-500">
          추천받을 문제 난이도와 유형을 선택해 주세요!
        </p>
        <button
          onClick={() => message.info('오픈 준비중인 기능이에요!')}
          className="px-20 py-10 mt-15 border-1 rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors transition-300"
        >
          문제 추천 받으러 가기
        </button>
      </div>
    </>
  )
}

export default Landing
