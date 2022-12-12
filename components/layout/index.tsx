import { useState } from 'react'
import pusherClient from '@utils/pusherClient'
import Link from 'next/link'
import Header from './header'
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
