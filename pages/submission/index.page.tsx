import { api } from '@api/index'
import PaginationBar from '@components/shared/PaginationBar'
import { useQuery } from '@tanstack/react-query'
import usePagination from 'react-use-pagination-hook'
import { submissionKeys } from './queryKey'
import SubmissionList from './SubmissionList'
import PageLoading from '@components/shared/PageLoading'

const SubmissionPage = () => {
  const paginationMethods = usePagination({ numOfPage: 5 })

  const { currentPage, setTotalPage } = paginationMethods
  const currentServerPageIndex = currentPage - 1

  const { data: submissionListPagination } = useQuery(
    submissionKeys.list(currentServerPageIndex, ''),
    () => api.submissionService.submissionList(currentServerPageIndex),
    {
      onSuccess(res) {
        setTotalPage(res.total_pages)
      },
    }
  )

  return (
    <div className="pt-50">
      <SubmissionList list={submissionListPagination?.content ?? []} />
      <div className="w-full flex justify-center py-30">
        <PaginationBar {...paginationMethods} />
      </div>
    </div>
  )
}

const pagePermission: PagePermissionInfo = {
  redirect: '/login',
}

SubmissionPage.permission = pagePermission

export default SubmissionPage
