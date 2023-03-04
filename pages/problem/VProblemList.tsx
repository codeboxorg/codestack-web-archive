import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

type ProblemRow = Problem & { handleRowClick: () => void }
type ProblemColumn = ColumnsType<ProblemRow>

type VProblemProps = {
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
]

const VProblemList = ({ list }: VProblemProps) => {
  return (
    <Table
      className="border-1 border-neutral-200 rounded-md px-1"
      rowClassName="cursor-pointer"
      onRow={(record) => ({
        onClick: record.handleRowClick,
      })}
      dataSource={list}
      columns={columns}
      pagination={false}
    />
  )
}

export default VProblemList
