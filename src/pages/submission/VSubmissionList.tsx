import BaseTable from '@components/core/BaseTable'
import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

type SubmissionRow = Submission & { handleRowClick: () => void }
type SubmissionColumns = ColumnsType<SubmissionRow>

export type VSubmissionListProps = {
    list: SubmissionRow[]
}

function SubmissionResultTag({ status }: { status: SubmissionStatus }) {
    if (status === 'AC') return <Tag color='green'>정답</Tag>
    if (status === 'WA') return <Tag color='red'>오답</Tag>
    if (status === 'PE') return <Tag color='yellow'>출력 형식 다름</Tag>
    if (status === 'TLE') return <Tag color='red'>시간 초과</Tag>
    if (status === 'MLE') return <Tag color='red'>메모리 초과</Tag>
    if (status === 'OLE') return <Tag color='yellow'>값 출력 초과</Tag>
    return <Tag color='red'>런타임 에러</Tag>
}

const columns: SubmissionColumns = [
    {
        title: '제출 번호',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '문제',
        dataIndex: 'problem',
        key: 'problem',
        render: (problem: SubmissionRow['problem']) => problem.title,
    },
    {
        title: '제출자',
        dataIndex: 'member',
        key: 'member',
        render: (member: SubmissionRow['member']) => member.nickname,
    },
    {
        title: '메모리 사용',
        dataIndex: 'memoryUsage',
        key: 'memoryUsage',
    },
    {
        title: '실행 시간',
        dataIndex: 'cpuTime',
        key: 'cpuTime',
    },
    {
        title: '제출 결과',
        dataIndex: 'statusCode',
        key: 'statusCode',
        render: (status: SubmissionRow['statusCode']) => <SubmissionResultTag status={status} />,
    },
]

function VSubmissionList({ list }: VSubmissionListProps) {
    return (
        <BaseTable
            className='border-1 border-neutral-200 rounded-md px-1'
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

export default VSubmissionList
