import Link from 'next/link'

function Error() {
  return (
    <>
      <p>에러페이지</p>
      <p>
        <Link href="/">홈으로 돌아가기</Link>
      </p>
    </>
  )
}

export default Error
