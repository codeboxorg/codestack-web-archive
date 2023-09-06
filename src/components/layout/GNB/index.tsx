import { useAuth } from '@hooks/shared'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

import Avatar from './components/Avatar'
import MainNavigates from './components/MainNavigates'
import MobileNavigates from './components/MobileNavigates'

const gnbShadowStyle = css`
    box-shadow: 0px 5.89px 5.13px rgba(131, 91, 91, 0.021), 0px 3.7px 3.23px rgba(0, 0, 0, 0.0182),
        0px 2.13px 1.86px rgba(0, 0, 0, 0.0149), 0px 0.94px 0.82px rgba(0, 0, 0, 0.0104);
`

function GNB() {
    const { user } = useAuth()

    return (
        <header tw='h-64' css={[tw`h-64`, gnbShadowStyle]}>
            <nav tw='h-full container flex items-center py-6 gap-x-30 pt-7'>
                <div tw='flex items-center flex-shrink-0 text-white mr-10'>
                    <Link href='/' tw='text-2xl relative top-[-2px] font-semibold tracking-tight text-black'>
                        CodeStack
                    </Link>
                </div>
                <div tw='items-center w-full hidden sm:flex'>
                    <div tw='flex gap-20 text-lg'>
                        <MainNavigates />
                    </div>
                    <div tw='inline-block ml-auto text-lg text-black'>
                        {user ? <Avatar /> : <Link href='/login'>로그인</Link>}
                    </div>
                </div>
                <div tw='ml-auto block sm:hidden'>
                    <MobileNavigates />
                </div>
            </nav>
        </header>
    )
}

export default GNB
