import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

type SubmissionRow = Submission & { handleRowClick: () => void }
type SubmissionColumns = ColumnsType<SubmissionRow>

export type VSubmissionListProps = {
  list: SubmissionRow[]
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
    dataIndex: 'memory_usage',
    key: 'memory_usage',
  },
  {
    title: '실행 시간',
    dataIndex: 'cpu_time',
    key: 'cpu_time',
  },
  {
    title: '제출 결과',
    dataIndex: 'status_code',
    key: 'status_code',
  },
]

const VSubmissionList = ({ list }: VSubmissionListProps) => {
  return (
    <Table
      className="border-1 border-neutral-200 rounded-md px-1"
      rowClassName="cursor-pointer"
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
