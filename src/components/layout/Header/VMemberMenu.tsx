import { Dropdown, MenuProps } from 'antd'
import { ReactElement } from 'react'

type Props = {
    links: MenuProps['items']
    children: ReactElement
}

function VMemberMenu({ links, children }: Props) {
    return (
        <Dropdown menu={{ items: links }} placement='bottomRight'>
            {children}
        </Dropdown>
    )
}

export default VMemberMenu