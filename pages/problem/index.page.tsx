import { api } from '@api/index'
import PaginationBar from '@components/shared/PaginationBar'
import { useQuery } from '@tanstack/react-query'
import { problemKeys } from './queryKey'
import usePagination from 'react-use-pagination-hook'
import ProblemList from './ProblemList'

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
      <ProblemList list={problemListPagination?.content ?? []} />
      <PaginationBar {...paginationMethods} />
    </>
  )
}

export default ProblemPage
