import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NAVIGATE_ITEM_LIST = [
    {
        href: '/problem',
        name: '문제',
    },
    {
        href: '/submission',
        name: '제출근황',
    },
]

function MainNavigates() {
    const { pathname } = useRouter()

    return (
        <>
            {NAVIGATE_ITEM_LIST.map(({ href, name }) => (
                <Link
                    className={classNames(
                        'block hover:text-blue-500 lg:inline-block',
                        pathname.startsWith(href) ? 'text-blue-500' : 'text-black',
                    )}
                    key={`${href}-${name}`}
                    href={href}
                >
                    {name}
                </Link>
            ))}
        </>
    )
}

export default MainNavigates
