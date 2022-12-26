import { api } from '@api/index'
import PaginationBar from '@components/shared/PaginationBar'
import { useQuery } from '@tanstack/react-query'
import { problemKeys } from 'constant/queryKeys/problem'
import Link from 'next/link'
import usePagination from 'react-use-pagination-hook'

const ProblemPage = () => {
  const paginationMethods = usePagination({ numOfPage: 5 })

  const { currentPage, setTotalPage } = paginationMethods
  const currentServerPageIndex = currentPage - 1

  const { data: problemList } = useQuery(
    problemKeys.list(currentServerPageIndex, ''),
    () => api.problemService.problemList(currentServerPageIndex),
    {
      onSuccess(res) {
        setTotalPage(res.total_pages)
      },
    }
  )

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
          {problemList?.content.map(({ id, title }, idx) => (
            <tr className="border-b" key={idx}>
              <td>{id}</td>
              <td>
                <Link href={`/problem/${id}`}>{title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-10 py-15">
        <PaginationBar {...paginationMethods} />
      </div>
    </>
  )
}

export default ProblemPage
