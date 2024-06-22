import { useAuth } from '@hooks/shared'
import { Dropdown } from 'antd'
import Link from 'next/link'
import tw from 'twin.macro'

function Avatar() {
    const { signInMember, signOut } = useAuth()

    if (!signInMember) return null
    const avatarActionList = [
        {
            label: <Link href={`/member/${signInMember.id}`}>내 프로필</Link>,
            key: 'my-page',
        },
        {
            label: <Link href='/settings'>설정</Link>,
            key: 'log-out',
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
            key: 'setting',
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
            <p>{signInMember.id}</p>
        </Dropdown>
    )
}

export default Avatar
