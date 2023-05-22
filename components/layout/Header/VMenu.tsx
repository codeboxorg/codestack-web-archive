import classNames from 'classnames'
import Link from 'next/link'

export type MenuItem = {
  href: string
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
