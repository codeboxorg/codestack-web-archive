import { useProblemList } from '@hooks/problem'
import { NextSeo } from 'next-seo'
import usePagination from 'react-use-pagination-hook'
import { PaginationBar } from '@components/core/common'

import ProblemList from './ProblemList'

function ProblemPage() {
    const paginationMethods = usePagination({ numOfPage: 5 })
    const { currentPage, setTotalPage } = paginationMethods

    const currentServerPageIndex = currentPage - 1

    const { data: problemListPagination } = useProblemList(currentServerPageIndex, {
        onSuccess({ totalElements }) {
            setTotalPage(totalElements)
        },
    })

    return (
        <>
            <NextSeo title='문제 목록' />
            <div className='pt-50'>
                <ProblemList list={problemListPagination?.content} />
                <div className='w-full flex justify-center py-30'>
                    <PaginationBar {...paginationMethods} />
                </div>
            </div>
        </>
    )
}

export default ProblemPage
