import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className="flex flex-wrap items-center py-6 bg-blue-500 gap-x-10 md:flex-nowrap lg:flex-nowrap pt-7 px-15">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link
            href="/"
            className="text-xl relative top-[-2px] font-semibold tracking-tight"
          >
            Codebox
          </Link>
        </div>
        <div className="flex items-center w-full">
          <div className="flex gap-10 text-sm">
            <Link
              href="/problem"
              className="block text-blue-200 lg:inline-block hover:text-white"
            >
              문제
            </Link>
            <Link
              href="/submission"
              className="block text-blue-200 lg:inline-block hover:text-white"
            >
              제출근황
            </Link>
          </div>
          <Link
            className="inline-block ml-auto text-sm text-blue-200 hover:text-white "
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
