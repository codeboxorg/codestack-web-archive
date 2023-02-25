import React, { ReactElement } from 'react'
import { Button, Dropdown, MenuProps, Space } from 'antd'

type Props = {
  links: MenuProps['items']
  children: ReactElement
}

const VMembderMenu = ({ links, children }: Props) => {
  return (
    <Dropdown menu={{ items: links }} placement="bottomRight">
      {children}
    </Dropdown>
  )
}

export default VMembderMenu
