import Link from 'next/link'

const Landing = () => {
  return (
    <>
      <p>
        <Link href={'/problem'}>문제 목록 페이지로</Link>
      </p>
    </>
  )
}

export default Landing
