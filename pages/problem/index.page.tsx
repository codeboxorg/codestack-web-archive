import { api } from '@api/index'
import PaginationBar from '@components/shared/PaginationBar'
import { useQuery } from '@tanstack/react-query'
import { problemKeys } from './queryKey'
import usePagination from 'react-use-pagination-hook'
import ProblemList from './ProblemList'
import { NextSeo } from 'next-seo'

const ProblemPage = () => {
  const paginationMethods = usePagination({ numOfPage: 5 })

  const { currentPage, setTotalPage } = paginationMethods
  const currentServerPageIndex = currentPage - 1

  const { data: problemListPagination } = useQuery(
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
      <NextSeo title={`문제 목록`} />
      <div className="pt-50">
        <ProblemList list={problemListPagination?.content ?? []} />
        <div className="w-full flex justify-center py-30">
          <PaginationBar {...paginationMethods} />
        </div>
      </div>
    </>
  )
}

export default ProblemPage
