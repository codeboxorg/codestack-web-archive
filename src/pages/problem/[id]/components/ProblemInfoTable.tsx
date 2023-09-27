import { BaseTable } from '@components/core/common'
import { useRootState } from '@hooks/shared'
import CommonConverter from '@utils/convert/CommonConverter'
import 'twin.macro'

const tableColumnList = [
    {
        title: '시간 제한',
        dataIndex: 'maxCpuTime',
        key: 'maxCpuTime',
    },
    {
        title: '메모리 제한',
        dataIndex: 'maxMemory',
        key: 'maxMemory',
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
        title: '풀이 가능 언어',
        dataIndex: 'possibleLanguage',
        key: 'possibleLanguage',
    },
]

function ProblemInfoTable() {
    const problemDetail = useRootState((state) => state.problem.problem)

    const tableData = {
        ...problemDetail,
        maxMemory: `${CommonConverter.convertByte(problemDetail.maxMemory, 'MB')} MB`,
        maxCpuTime: `${CommonConverter.convertMillisecond(problemDetail.maxCpuTime, 'SEC')} 초`,
        possibleLanguage: problemDetail.languages.map(({ name }) => name).join(', ') ?? '',
    }

    return (
        <div tw='mb-30'>
            <BaseTable
                rowKey={(row) => row.id}
                dataSource={[{ ...tableData, id: problemDetail.id }]}
                columns={tableColumnList}
                pagination={false}
            />
        </div>
    )
}

export default ProblemInfoTable
