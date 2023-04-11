import BaseTable from '@components/shared/BaseTable'

export type VProblemDetailProps = Omit<
  Problem,
  'max_memory' | 'max_cpu_time'
> & { max_memory: string; max_cpu_time: string; possibleLanguage: string }

import { forwardRef } from 'react'
import style from './VProblemDeatil.module.scss'

const columns = [
  {
    title: '시간 제한',
    dataIndex: 'max_cpu_time',
    key: 'max_cpu_time',
  },
  {
    title: '메모리 제한',
    dataIndex: 'max_memory',
    key: 'max_memory',
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
  ({ id, title, context, ...tableInfo }: VProblemDetailProps, ref) => {
    return (
      <div ref={ref}>
        <div>
          <span className="rounded-md bg-blue-500 px-15 py-10 text-white">
            {id}번 문제
          </span>
        </div>
        <h1 className="mt-30 mb-30 text-3xl font-semibold">{title}</h1>
        <div className="mb-30">
          <BaseTable
            rowKey={(row) => row.id}
            dataSource={[{ ...tableInfo, id }]}
            columns={columns}
            pagination={false}
          />
        </div>
        <section
          className={style.content}
          dangerouslySetInnerHTML={{ __html: context }}
        ></section>
      </div>
    )
  }
)

VProblemDetail.displayName = 'VProblemDetail'

export default VProblemDetail
