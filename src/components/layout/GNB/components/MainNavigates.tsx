import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NAVIGATE_ITEM_LIST } from '../constants/navigateItemList'

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
