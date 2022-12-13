import { api } from '@api/index'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

const ProblemPage = ({ content, total_pages }: Pagination<Problem>) => {
  return (
    <>
      <table className="w-full text-sm text-gray-500">
        <thead>
          <tr className="border-b">
            <th className="w-10">ID</th>
            <th className="w-90">제목</th>
          </tr>
        </thead>
        <tbody>
          {content.map(({ id, title }, idx) => (
            <tr className="border-b" key={idx}>
              <td>{id}</td>
              <td>
                <Link href={`/problem/${id}`}>{title}</Link>
              </td>
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

export default ProblemPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageNumber = context.query.page ? Number(context.query.page) : 0
  const res = await api.problemService.problemList(pageNumber)
  return {
    props: res,
  }
}
