import PaginationBar from '@components/shared/PaginationBar'
import { useTagList } from '@hooks/tag/useTagList'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import usePagination from 'react-use-pagination-hook'

const columns: ColumnsType<Tag> = [
    {
        title: '태그',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link href={`/tags/${record.id}`}>{text}</Link>,
    },
    {
        // TODO : 나중에 수정하면 변경 필요
        title: '문제 수',
        dataIndex: 'id',
        key: 'id',
    },
]

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
        <div className='pt-50'>
            <Table columns={columns} dataSource={tagListPagination?.content} pagination={false} />
            <div className='w-full flex justify-center py-30'>
                <PaginationBar {...paginationMethods} />
            </div>
        </div>
    )
}

export default TagsPage
