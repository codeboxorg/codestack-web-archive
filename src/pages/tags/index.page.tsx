import { PaginationBar } from '@components/core/common'
import { useTagList } from '@hooks/tag/useTagList'
import { NextSeo } from 'next-seo'
import usePagination from 'react-use-pagination-hook'

import TagList from './TagList'

function TagsPage() {
    const paginationMethods = usePagination({ numOfPage: 5 })

    const { currentPage, setTotalPage } = paginationMethods
    const currentServerPageIndex = currentPage - 1

    const { data: tagListPagination } = useTagList(currentServerPageIndex, {
        onSuccess({ pageInfo: { totalPage } }) {
            setTotalPage(totalPage)
        },
    })

    return (
        <>
            <NextSeo title='제출 근황' />
            <div className='pt-50'>
                <TagList list={tagListPagination?.content ?? []} />
                <div className='w-full flex justify-center py-30'>
                    <PaginationBar {...paginationMethods} />
                </div>
            </div>
        </>
    )
}

export default TagsPage
