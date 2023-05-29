import Image from 'next/image'
import mainBanner from '@assets/background/main-banner.png'
import classNames from 'classnames/bind'
import style from './MainBanner.module.scss'

const cx = classNames.bind(style)

function MainBanner() {
  return (
    <>
      <div className="h-[60vh]" />
      <div className="absolute w-full top-65 left-0 overflow-hidden h-[60vh]">
        <Image
          src={mainBanner}
          className={cx('banner-img', 'object-cover h-full blur-sm scale-110')}
          alt="main-banner"
        />
      </div>
      <div className="absolute w-full top-65 left-0 flex flex-center flex-col z-40 text-white h-[60vh] px-10">
        <h1 className="text-30 sm:text-40 md:text-50 font-bold">
          다 함께 성장하는
        </h1>
        <h1 className="text-30 sm:text-40 md:text-50 font-bold">
          코딩테스트 연습 플랫폼
        </h1>
        <h3 className="text-13 sm:text-base font-semibold mt-20">
          CodeStack과 함께 목표를 설정하고 같이 문제를 풀어나가보아요!
        </h3>
      </div>
    </>
  )
}

export default MainBanner
