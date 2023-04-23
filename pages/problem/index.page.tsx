import PaginationBar from '@components/shared/PaginationBar'
import { NextSeo } from 'next-seo'
import usePagination from 'react-use-pagination-hook'
import ProblemList from './ProblemList'
import { useProblems } from './useProblems'

const ProblemPage = () => {
  const paginationMethods = usePagination({ numOfPage: 5 })
  const { currentPage, setTotalPage } = paginationMethods
  const currentServerPageIndex = currentPage - 1

  const { data: problemListPagination } = useProblems({
    variables: {
      pageNum: currentServerPageIndex,
    },
    onCompleted({ problems: { total_pages } }) {
      setTotalPage(total_pages)
    },
  })

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
