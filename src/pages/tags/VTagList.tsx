import BaseTable from '@components/core/BaseTable'
import { ColumnsType } from 'antd/es/table'

type TagRow = Tag
type TagColumns = ColumnsType<TagRow>

export type VTagListProps = {
    list: TagRow[]
}

const columns: TagColumns = [
    {
        title: '태그',
        dataIndex: 'name',
        key: 'name',
    },
    // TODO: 서버측 문제 수 field 개발 완료 시 교체
    {
        title: '문제 수',
        dataIndex: 'id',
        key: 'id',
    },
]

function VSubmissionList({ list }: VTagListProps) {
    return (
        <BaseTable
            className='border-1 border-neutral-200 rounded-md px-1'
            rowClassName='cursor-pointer'
            rowKey={(row) => row.id}
            dataSource={list}
            columns={columns}
            pagination={false}
        />
    )
}

export default VSubmissionList
