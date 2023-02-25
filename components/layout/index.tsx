import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default Layout
