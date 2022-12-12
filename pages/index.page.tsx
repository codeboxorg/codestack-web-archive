import Link from 'next/link'

const Landing = () => {
  return (
    <>
      <Link href={'/loginPage'}>로그인 페이지로</Link>
      <p>
        <Link href={'/problem'}>문제 목록 페이지로</Link>
      </p>
    </>
  )
}

export default Landing
