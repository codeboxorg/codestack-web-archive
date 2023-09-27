import { Drawer } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import tw from 'twin.macro'

import { NAVIGATE_ITEM_LIST } from '../constants/navigateItemList'

function MobileNavigates() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)

    const handleOpenClick = () => {
        setIsOpenDrawer(true)
    }

    const handleCloseClick = () => {
        setIsOpenDrawer(false)
    }

    return (
        <>
            <button type='button' onClick={handleOpenClick}>
                <AiOutlineMenu size={25} />
            </button>
            <Drawer
                headerStyle={tw`hidden`}
                bodyStyle={tw`pt-15`}
                contentWrapperStyle={tw`w-300`}
                placement='right'
                closeIcon={null}
                open={isOpenDrawer}
            >
                <div tw='flex items-center pb-30'>
                    <div tw='text-2xl font-semibold tracking-tight text-black'>CodeStack</div>
                    <button type='button' onClick={handleCloseClick} className='ml-auto'>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
                {NAVIGATE_ITEM_LIST.map(({ href, name }) => (
                    <Link
                        onClick={handleCloseClick}
                        tw='block lg:inline-block !text-black text-lg mb-10 hover:!text-blue-500'
                        key={`${href}-${name}`}
                        href={href}
                    >
                        {name}
                    </Link>
                ))}
            </Drawer>
        </>
    )
}

export default MobileNavigates
