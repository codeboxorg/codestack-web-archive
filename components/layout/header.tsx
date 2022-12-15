import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            Codebox
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm">
            <Link
              href="/problem"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"
            >
              문제
            </Link>
          </div>
          <div className="text-sm lg:flex-grow">
            <Link
              href="/submission"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"
            >
              제출 근황
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
