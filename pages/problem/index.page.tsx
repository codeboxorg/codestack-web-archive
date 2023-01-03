import { api } from '@api/index'
import BaseTable from '@components/shared/BaseTable'
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
      <BaseTable
        theadClassName="border-1 border-neutral-300 all:py-5"
        className="w-full "
        emptyElement={<div>데이터가 없습니다.</div>}
        column={[
          ['ID', 10],
          ['제목', 20],
        ]}
      >
        {problemList?.content.map(({ id, title }, idx) => (
          <tr
            className="under:py-6 under:border-b-1 under:border-neutral-300"
            key={idx}
          >
            <td>{id}</td>
            <td>
              <Link href={`/problem/${id}`}>{title}</Link>
            </td>
          </tr>
        ))}
      </BaseTable>
      <div className="flex justify-center gap-10 py-15">
        <PaginationBar {...paginationMethods} />
      </div>
    </>
  )
}

export default ProblemPage
