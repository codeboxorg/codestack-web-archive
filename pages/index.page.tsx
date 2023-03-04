import { Carousel } from 'antd'

const Landing = () => {
  return (
    <>
      <div className="pt-30">
        <Carousel autoplay speed={400}>
          <div>
            <div className="h-250 bg-blue-800 rounded-xl overflow-hidden px-30 flex items-center">
              <div className="text-white">
                <div className="text-2xl font-bold">Codebox와 함께</div>
                <div className="text-2xl font-bold">성장해봐요~!</div>
                <div className="mt-10 text-lg">
                  목표를 설정하고 맞춤 문제를 추천 받을 수 있어요!
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-250 bg-slate-600 rounded-xl overflow-hidden px-30 flex items-center">
              <div className="text-white">
                <div className="text-2xl font-bold">내가 만드는 문제!</div>
                <div className="mt-10 text-lg">
                  문제를 커스터마이징 해서 응용 문제를 만들어봐요!
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Landing
