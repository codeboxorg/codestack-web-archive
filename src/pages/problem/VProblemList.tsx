import { BaseTable } from '@components/core/common'
import { ColumnsType } from 'antd/es/table'

type ProblemRow = Problem & { handleRowClick: () => void; acceptPer: string }
type ProblemColumn = ColumnsType<ProblemRow>

export type VProblemProps = {
    list: ProblemRow[]
}

const columns: ProblemColumn = [
    {
        title: '문제 번호',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '문제 제목',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '제출',
        dataIndex: 'submission',
        key: 'submission',
    },
    {
        title: '정답',
        dataIndex: 'accepted',
        key: 'accepted',
    },
    {
        title: '정답률',
        dataIndex: 'acceptPer',
        key: 'acceptPer',
    },
]

function VProblemList({ list }: VProblemProps) {
    return (
        <BaseTable
            rowClassName='cursor-pointer'
            onRow={(row) => ({
                onClick: row.handleRowClick,
            })}
            rowKey={(row) => row.id}
            dataSource={list}
            columns={columns}
            pagination={false}
        />
    )
}

export default VProblemList
