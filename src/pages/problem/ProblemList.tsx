import { BaseTable } from '@components/core/common'
import { Percentage } from '@utils/percentage'
import { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'

interface Props {
    list?: Problem[]
}

interface ProblemRow extends Problem {
    acceptPer: string
}

type ProblemColumns = ColumnsType<ProblemRow>

const tableColumns: ProblemColumns = [
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

function ProblemList({ list = [] }: Props) {
    const router = useRouter()

    const tableData = list.map((problem) => ({
        ...problem,
        acceptPer: `${Percentage.comparePercentage(problem.submission, problem.accepted).toFixed(2)}%`,
    }))

    const handleRowAction = (row: ProblemRow) => ({
        onClick: () => router.push(`/problem/${row.id}`),
    })

    return (
        <BaseTable
            rowClassName='cursor-pointer'
            onRow={handleRowAction}
            rowKey={(row) => row.id}
            dataSource={tableData}
            columns={tableColumns}
            pagination={false}
        />
    )
}

export default ProblemList
