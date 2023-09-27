import { GNB } from '@components/core/layout'
import { ReactNode } from 'react'
import 'twin.macro'

interface Props {
    children: ReactNode
}

function Layout({ children }: Props) {
    return (
        <>
            <GNB />
            <main tw='container mx-auto'>{children}</main>
        </>
    )
}

export default Layout
