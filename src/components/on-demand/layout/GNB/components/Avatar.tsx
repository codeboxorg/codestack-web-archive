import { useAuth } from '@hooks/shared'
import { Dropdown } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

function Avatar() {
    const { signInMember, signOut } = useAuth()

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
                    onKeyDown={() => signOut({ message: true })}
                    onClick={() => signOut({ message: true })}
                >
                    로그아웃
                </button>
            ),
            key: 'log-out',
        },
    ]

    if (!signInMember) return null

    return (
        <Dropdown overlayStyle={tw`w-120`} menu={{ items: avatarActionList }} placement='bottomRight'>
            <Image
                tw='rounded-full cursor-pointer shadow-md p-3'
                src={signInMember.profileImage}
                width={45}
                height={45}
                alt='ProfileImage of the author'
            />
        </Dropdown>
    )
}

export default Avatar
