import { useAuth } from '@hooks/shared'
import { Dropdown } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

function Avatar() {
    const { user, logout } = useAuth()

    const avatarActionList = [
        {
            label: <Link href='/'>마이페이지</Link>,
            key: 'my-page',
        },
        {
            label: (
                <button
                    tw='flex justify-start text-red-500'
                    type='button'
                    onKeyDown={() => logout({ message: true })}
                    onClick={() => logout({ message: true })}
                >
                    로그아웃
                </button>
            ),
            key: 'log-out',
        },
    ]

    if (!user) return null

    return (
        <Dropdown overlayStyle={tw`w-120`} menu={{ items: avatarActionList }} placement='bottomRight'>
            <Image
                tw='rounded-full w-45 h-45 cursor-pointer shadow-md p-3'
                src={user.profileImage}
                alt='ProfileImage of the author'
            />
        </Dropdown>
    )
}

export default Avatar
