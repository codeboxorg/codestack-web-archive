import { api } from '@api/index'
import withAuthGssp from '@server/utils/withAuthGssp'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

const SubmissionPage = ({ content, total_pages }: Pagination<Submission>) => {
  return (
    <>
      <table className="w-full text-sm text-gray-500">
        <thead>
          <tr className="border-b">
            <th className="w-10">ID</th>
            <th>유저</th>
            <th>문제</th>
            <th>결과</th>
            <th>언어</th>
            <th>사용 시간</th>
            <th>메모리</th>
            <th>제출 시간</th>
          </tr>
        </thead>
        <tbody>
          {content.map((e: Submission, i: number) => (
            <tr className="border-b" key={i}>
              <td>
                <Link href={`submission/${e.id}`}>{e.id}</Link>
              </td>
              <td className="text-center">{e.member.nickname}</td>
              <td className="text-center">
                <Link href={`problem/${e.problem.id}`}>{e.problem.title}</Link>
              </td>
              <td></td>
              <td className="text-center">{e.language.name}</td>
              <td></td>
              <td></td>
              <td className="text-center">1일전</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <ul className="flex list-style-none">
          {Array.from(Array(total_pages), (_, idx) => {
            return (
              <li className="px-2" key={idx}>
                <Link href={{ query: { page: idx } }}>{idx + 1}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

const pagePermission: PagePermissionInfo = {
  redirect: '/login',
  loadingFallback: <div>testFallback</div>,
}

SubmissionPage.permission = pagePermission

export default SubmissionPage
export const getServerSideProps: GetServerSideProps = withAuthGssp(
  async (context) => {
    const pageNumber = context.query.page ? Number(context.query.page) : 0
    const res = await api.submissionService.submissionList(pageNumber)
    return {
      props: res,
    }
  }
)
