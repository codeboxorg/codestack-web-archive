import { useRouter } from 'next/router'
import VMenu, { MenuItem, VMenuProps } from './VMenu'

export const menuItems: Omit<MenuItem, 'isHighlight'>[] = [
    {
        href: '/problem',
        name: '문제',
    },
    {
        href: '/submission',
        name: '제출근황',
    },
    {
        href: '/tags',
        name: '태그',
    },
]

function Menu() {
    const { pathname } = useRouter()
    const vMenuProps: VMenuProps = {
        menus: menuItems.map((menuItem) => ({
            ...menuItem,
            isHighlight: pathname.startsWith(menuItem.href),
        })),
    }

    return <VMenu {...vMenuProps} />
}

export default Menu
