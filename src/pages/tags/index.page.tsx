import { api } from '@api/index'
import { useQuery } from '@tanstack/react-query'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import PaginationBar from '@components/shared/PaginationBar'
import usePagination from 'react-use-pagination-hook'
import { tagKeys } from './queryKey'

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
    const paginationMethods = usePagination({ numOfPage: 2 })
    const { currentPage, setTotalPage } = paginationMethods
    const currentServerPageIndex = currentPage - 1

    const data = useQuery(
        tagKeys.list(currentServerPageIndex, ''),
        () => api.tagService.tagList(currentServerPageIndex),
        {
            onSuccess(res) {
                setTotalPage(res.pageInfo.totalPage)
            },
        },
    )
    return (
        <div className='pt-50'>
            <Table columns={columns} dataSource={data.data?.content} pagination={false} />
            <div className='w-full flex justify-center py-30'>
                <PaginationBar {...paginationMethods} />
            </div>
        </div>
    )
}

export default TagsPage
