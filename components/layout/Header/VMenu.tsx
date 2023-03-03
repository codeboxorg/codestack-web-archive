import classNames from 'classnames'
import { ROUTE_PATH } from 'constant/routePath'
import Link from 'next/link'

export type MenuItem = {
  href: ROUTE_PATH | string
  name: string
  isHighlight: boolean
}

export type VMenuProps = {
  menus: MenuItem[]
}

const VMenu = ({ menus }: VMenuProps) => {
  return (
    <>
      {menus.map(({ href, name, isHighlight }) => (
        <Link
          className={classNames(
            'block hover:text-blue-500 lg:inline-block',
            isHighlight ? 'text-blue-500' : 'text-black'
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

export default VMenu
