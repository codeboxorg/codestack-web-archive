import BaseTable from '@components/core/BaseTable'
import { useRootState } from '@hooks/shared'
import CommonConverter from '@utils/convert/CommonConverter'
import ProblemBody from './ProblemContent'

const TABLE_COLUMN_LIST = [
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

function ProblemDetail() {
    const detail = useRootState((state) => state.problem.problem)

    const tableData = {
        ...detail,
        maxMemory: `${CommonConverter.convertByte(detail.maxMemory, 'MB')} MB`,
        maxCpuTime: `${CommonConverter.convertMillisecond(detail.maxCpuTime, 'SEC')} 초`,
        possibleLanguage: detail.languages.map(({ name }) => name).join(', ') ?? '',
    }

    return (
        <div>
            <div>
                <span className='rounded-md bg-blue-500 px-15 py-10 text-white'>{detail.id}번 문제</span>
            </div>
            <h1 className='mt-30 mb-30 text-3xl font-semibold'>{detail.title}</h1>
            <div className='mb-30'>
                <BaseTable
                    rowKey={(row) => row.id}
                    dataSource={[{ ...tableData, id: detail.id }]}
                    columns={TABLE_COLUMN_LIST}
                    pagination={false}
                />
            </div>
            <ProblemBody contentHTML={detail.context} />
        </div>
    )
}

export default ProblemDetail
