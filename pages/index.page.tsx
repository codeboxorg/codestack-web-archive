import { Carousel, message } from 'antd'
import Link from 'next/link'

const Landing = () => {
  return (
    <>
      <div className="pt-30">
        <Carousel autoplay speed={400}>
          <div>
            <div className="h-250 bg-blue-800 rounded-xl overflow-hidden px-30 flex items-center">
              <div className="text-white">
                <p className="text-2xl font-bold">Codebox와 함께</p>
                <p className="text-2xl font-bold">성장해봐요~!</p>
                <p className="mt-10 text-lg">
                  목표를 설정하고 맞춤 문제를 추천 받을 수 있어요!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-250 bg-slate-600 rounded-xl overflow-hidden px-30 flex items-center">
              <div className="text-white">
                <p className="text-2xl font-bold">내가 만드는 문제!</p>
                <p className="mt-10 text-lg">
                  문제를 커스터마이징 해서 응용 문제를 만들어봐요!
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
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
      <div className="pt-40">
        <h2 className="text-2xl font-bold">문제 추천 설정하기</h2>
        <p className="mt-5 text-gray-500">
          로그인 후 추천받을 문제 난이도와 유형을 선택해 주세요!
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
