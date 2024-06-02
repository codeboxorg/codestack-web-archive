import { useAuth } from '@hooks/shared'
import { Dropdown } from 'antd'
import Link from 'next/link'
import tw from 'twin.macro'

function Avatar() {
    const { signInMember, signOut } = useAuth()

    if (!signInMember) return null
    const avatarActionList = [
        {
            label: <Link href='/member/rrrmaster'>마이페이지</Link>,
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
    return (
        <Dropdown overlayStyle={tw`w-120`} menu={{ items: avatarActionList }} placement='bottomRight'>
            {/* <Image
                tw='rounded-full cursor-pointer shadow-md p-3'
                src={signInMember.profileImage}
                width={45}
                height={45}
                alt='ProfileImage of the author'
            /> */}
            <p>{signInMember.id}11</p>
        </Dropdown>
    )
}

export default Avatar
