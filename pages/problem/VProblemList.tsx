import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

type ProblemRowItem = Problem & { handleRowClick: () => void }

type VProblemProps = {
  list: ProblemRowItem[]
  columns: ColumnsType<ProblemRowItem>
}

const VProblemList = ({ list, columns }: VProblemProps) => {
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
