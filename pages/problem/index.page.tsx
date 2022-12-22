import { api } from '@api/index'
import { useQuery } from '@tanstack/react-query'
import { problemKeys } from 'constant/queryKeys/problem'
import Link from 'next/link'
import usePagination from 'react-use-pagination-hook'

const ProblemPage = () => {
  const {
    pagelist,
    goNextSection,
    goBeforeSection,
    goFirstSection,
    goLastSection,
    goNext,
    goBefore,
    setTotalPage,
    setPage,
    currentPage,
  } = usePagination({ numOfPage: 5 })

  const { data: problemList } = useQuery(
    problemKeys.list(currentPage - 1, ''),
    () => api.problemService.problemList(currentPage),
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
        <button onClick={() => goBeforeSection()}>{'<<'}</button>
        <button onClick={() => goBefore()}>{'<'}</button>
        {pagelist.map((page, idx) => (
          <button
            className={currentPage === page ? 'text-blue-500' : ''}
            onClick={() => setPage(page)}
            key={idx}
          >
            {page}
          </button>
        ))}
        <button onClick={() => goNext()}>{'>'}</button>
        <button onClick={() => goNextSection()}>{'>>'}</button>
      </div>
    </>
  )
}

export default ProblemPage
