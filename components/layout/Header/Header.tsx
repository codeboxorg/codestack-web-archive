import Link from 'next/link'

const Header = () => {
  return (
    <header
      className="h-64"
      style={{
        boxShadow:
          '0px 5.89px 5.13px rgba(0, 0, 0, 0.0212), 0px 3.7px 3.23px rgba(0, 0, 0, 0.0182), 0px 2.13px 1.86px rgba(0, 0, 0, 0.0149), 0px 0.94px 0.82px rgba(0, 0, 0, 0.0104)',
      }}
    >
      <nav className="h-full flex flex-wrap items-center py-6 gap-x-10 md:flex-nowrap lg:flex-nowrap pt-7 px-15">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link
            href="/"
            className="text-xl relative top-[-2px] font-semibold tracking-tight text-black"
          >
            Codebox
          </Link>
        </div>
        <div className="flex items-center w-full">
          <div className="flex gap-10 text-sm">
            <Link
              href="/problem"
              className="block text-black lg:inline-block hover:text-white"
            >
              문제
            </Link>
            <Link
              href="/submission"
              className="block text-black lg:inline-block hover:text-white"
            >
              제출근황
            </Link>
          </div>
          <Link
            className="inline-block ml-auto text-sm text-black hover:text-white "
            href="/login"
          >
            로그인
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Header
