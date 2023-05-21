import { useRouter } from 'next/router'
import { useMember } from './useMember'
import { useState } from 'react'
import { Avatar } from 'antd'
const Landing = () => {
  const router = useRouter()
  const [nickname, setNickname] = useState('')
  const [profile, setProfile] = useState('')
  const { username } = router.query
  useMember({
    variables: { username },
    onCompleted({ matchedUser }) {
      setNickname(matchedUser.nickname)
      setProfile(matchedUser.profileImage)
    },
  })
  return (
    <>
      <main className="container px-20 w-full pt-[7vh]">
        <Avatar src={profile} size={128} />
        <p className="text-black text-30">{nickname}</p>
        <span className="text-neutral-400 text-20">{username}</span>
      </main>
    </>
  )
}

export default Landing
