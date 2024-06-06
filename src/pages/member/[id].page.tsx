import { BaseTable } from '@components/core/common'
import { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'

const columns: ColumnsType<any> = [
    {
        title: '문제 ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '제목',
        dataIndex: 'cpuTime',
        key: 'cpuTime',
    },
    {
        title: '해결 날짜',
        dataIndex: 'statusCode',
        key: 'statusCode',
    },
]

function Landing() {
    const router = useRouter()
    const { id } = router.query
    return (
        <main className='container px-20 w-full pt-[7vh]'>
            <h1 className='text-30'>{id}</h1>

            <div className='h-500'>1</div>
            <div className='mt-20'>
                <h2 className='text-20'>해결한 문제</h2>

                <BaseTable
                    rowKey={(row) => row.id}
                    dataSource={[
                        { id: 1, cpuTime: 1232, memoryUsage: 1000123, statusCode: 'AC' },
                        { id: 2, cpuTime: 1032, memoryUsage: 3455642, statusCode: 'WA' },
                        { id: 3, cpuTime: 3000, memoryUsage: 2333123, statusCode: 'TLE' },
                    ]}
                    columns={columns}
                    pagination={false}
                />
            </div>
        </main>
    )
}

export default Landing
