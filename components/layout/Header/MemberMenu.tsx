import useAuth from '@hooks/useAuth'
import Link from 'next/link'
import React from 'react'
import VMemberMenu from './VMemberMenu'

type Props = {
  profileImage: Member['profile_image']
}

const MemberMenu = ({ profileImage }: Props) => {
  const { logout } = useAuth()
  const memberLinks = [
    {
      label: <Link href="/">마이페이지</Link>,
    },
    {
      label: (
        <div
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
    <>
      <VMemberMenu {...vMemberMenuProps}>
        <img
          className="rounded-full w-35 h-35 cursor-pointer"
          src={profileImage}
          alt="Picture of the author"
        />
      </VMemberMenu>
    </>
  )
}

export default MemberMenu
