import { ReactNode } from 'react'
import 'twin.macro'

import GNB from '../GNB'

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
