import Link from 'next/link'
import React from 'react'
import VMemberMenu from './VMemberMenu'

type Props = {
  profileImage: Member['profile_image']
}

const MemberMenu = ({ profileImage }: Props) => {
  const memberLinks = [
    {
      label: <Link href="/">마이페이지</Link>,
    },
    {
      label: <div className="w-100">로그아웃</div>,
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
