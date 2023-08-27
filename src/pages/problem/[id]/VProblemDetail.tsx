import BaseTable from '@components/shared/BaseTable'

import { forwardRef } from 'react'
import style from './VProblemDeatil.module.scss'

export type VProblemDetailProps = Omit<Problem, 'maxMemory' | 'maxCpuTime'> & {
    maxMemory: string
    maxCpuTime: string
    possibleLanguage: string
}

const columns = [
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

const VProblemDetail = forwardRef<HTMLDivElement, VProblemDetailProps>(
    ({ id, title, context, ...tableInfo }: VProblemDetailProps, ref) => (
        <div ref={ref}>
            <div>
                <span className='rounded-md bg-blue-500 px-15 py-10 text-white'>{id}번 문제</span>
            </div>
            <h1 className='mt-30 mb-30 text-3xl font-semibold'>{title}</h1>
            <div className='mb-30'>
                <BaseTable
                    rowKey={(row) => row.id}
                    dataSource={[{ ...tableInfo, id }]}
                    columns={columns}
                    pagination={false}
                />
            </div>
            <section className={style.content} dangerouslySetInnerHTML={{ __html: context }} />
        </div>
    ),
)

VProblemDetail.displayName = 'VProblemDetail'

export default VProblemDetail
