import PaginationBar from '@components/core/PaginationBar'
import { useSubmissionList } from '@hooks/submission'
import { NextSeo } from 'next-seo'
import usePagination from 'react-use-pagination-hook'
import SubmissionList from './SubmissionList'

function SubmissionPage() {
    const paginationMethods = usePagination({ numOfPage: 5 })

    const { currentPage, setTotalPage } = paginationMethods
    const currentServerPageIndex = currentPage - 1

    const { data: submissionListPagination } = useSubmissionList(currentServerPageIndex, {
        onSuccess({ pageInfo: { totalPage } }) {
            setTotalPage(totalPage)
        },
    })

    return (
        <>
            <NextSeo title='제출 근황' />
            <div className='pt-50'>
                <SubmissionList list={submissionListPagination?.content ?? []} />
                <div className='flex justify-center w-full py-30'>
                    <PaginationBar {...paginationMethods} />
                </div>
            </div>
        </>
    )
}

const pagePermission: PagePermissionInfo = {
    redirect: '/sign-in',
}

SubmissionPage.permission = pagePermission

export default SubmissionPage
