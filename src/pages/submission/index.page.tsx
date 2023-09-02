import { api } from '@api/index'
import PaginationBar from '@components/shared/PaginationBar'
import { useQuery } from '@tanstack/react-query'
import usePagination from 'react-use-pagination-hook'
import { NextSeo } from 'next-seo'
import SubmissionList from './SubmissionList'
import { submissionKeys } from './queryKey'

function SubmissionPage() {
    const paginationMethods = usePagination({ numOfPage: 5 })

    const { currentPage, setTotalPage } = paginationMethods
    const currentServerPageIndex = currentPage - 1

    const { data: submissionListPagination } = useQuery(
        submissionKeys.list(currentServerPageIndex, ''),
        () => api.submissionService.submissionList(currentServerPageIndex),
        {
            onSuccess(res) {
                setTotalPage(res.pageInfo.totalPage)
            },
        },
    )

    return (
        <>
            <NextSeo title='제출 근황' />
            <div className='pt-50'>
                <SubmissionList list={submissionListPagination?.content ?? []} />
                <div className='w-full flex justify-center py-30'>
                    <PaginationBar {...paginationMethods} />
                </div>
            </div>
        </>
    )
}

const pagePermission: PagePermissionInfo = {
    redirect: '/login',
}

SubmissionPage.permission = pagePermission

export default SubmissionPage
