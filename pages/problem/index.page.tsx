import axios from 'axios'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

interface Problem {
  id: number
  title: string
}

const ProblemPage = ({ content, total_pages }: Pagenation<Problem>) => {
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
          {content.map((e: any, i: number) => (
            <tr className="border-b" key={i}>
              <td>{e.id}</td>
              <td>
                <Link href={`/problem/${e.id}`}>{e.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <ul className="flex list-style-none">
          {Array.from(Array(total_pages), (e, i) => {
            return (
              <li className="px-2" key={i}>
                <Link href={{ query: { page: i } }}>{i + 1}</Link>
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
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/v1/problem'
  const res = await axios.get<Pagenation<Problem>>(url, {
    params: {
      page: context.query.page,
    },
  })

  return {
    props: res.data,
  }
}
