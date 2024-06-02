import { useRouter } from 'next/router'
import { BaseTable } from '@components/core/common'
import { ColumnsType } from 'antd/es/table'
import { Tag } from 'antd'
import Link from 'next/link'

type Props = {
    list: Submission[]
}

type SubmissionRow = Submission
type SubmissionColumns = ColumnsType<SubmissionRow>

function SubmissionResultTag({ status }: { status: SubmissionStatus }) {
    if (status === 'AC') return <Tag color='green'>정답</Tag>
    if (status === 'WA') return <Tag color='red'>오답</Tag>
    if (status === 'CE') return <Tag color='red'>컴파일 오류</Tag>
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
        render: (problem: SubmissionRow['problem']) => <Link href={`/problem/${problem.id}`}>{problem.name}</Link>,
    },
    {
        title: '제출자',
        dataIndex: 'member',
        key: 'member',
        render: (member: SubmissionRow['member']) => <Link href={`/member/${member.id}`}>{member.id}</Link>,
    },
    {
        title: '메모리 사용',
        dataIndex: 'maxMemoryUsage',
        key: 'maxMemoryUsage',
    },
    {
        title: '실행 시간',
        dataIndex: 'maxCpuTime',
        key: 'maxCpuTime',
    },
    {
        title: '제출 결과',
        dataIndex: 'status',
        key: 'status',
        render: (status: SubmissionRow['status']) => <SubmissionResultTag status={status} />,
    },
]

function SubmissionList({ list }: Props) {
    const router = useRouter()

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

export default SubmissionList
