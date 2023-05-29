import useAuth from '@hooks/useAuth'
import Link from 'next/link'
import VMemberMenu from './VMemberMenu'

type Props = {
  profileImage: Member['profile_image']
}

function MemberMenu({ profileImage }: Props) {
  const { logout } = useAuth()
  const memberLinks = [
    {
      label: <Link href="/">마이페이지</Link>,
    },
    {
      label: (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => logout({ message: true })}
          onClick={() => logout({ message: true })}
          className="w-120 text-red-500"
        >
          로그아웃
        </div>
      ),
    },
  ]

  const vMemberMenuProps = {
    links: memberLinks.map((item, idx) => ({ ...item, key: idx })),
  }

  return (
    <VMemberMenu {...vMemberMenuProps}>
      <img
        className="rounded-full w-45 h-45 cursor-pointer shadow-md p-3"
        src={profileImage}
        alt="ProfileImage of the author"
      />
    </VMemberMenu>
  )
}

export default MemberMenu
