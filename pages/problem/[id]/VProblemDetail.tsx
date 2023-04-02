import BaseTable from '@components/shared/BaseTable'
import { convertByte, convertMS } from '@utils/convert/convertByte'

type VProblemDetailProps = Problem

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

const VProblemDetail = ({
  id,
  title,
  context,
  language,
  max_cpu_time,
  max_memory,
  ...rest
}: VProblemDetailProps) => {
  const possibleLanguage = language.map(({ name }) => name).join(', ')
  const baseInfo = {
    ...rest,
    max_memory: `${convertByte(max_memory, 'MB')} MB`,
    max_cpu_time: `${convertMS(max_cpu_time, 'SEC')} 초`,
    possibleLanguage,
  }

  return (
    <div>
      <div>
        <span className="rounded-md bg-blue-500 px-15 py-10 text-white">
          {id}번 문제
        </span>
      </div>
      <h1 className="mt-30 mb-30 text-3xl">{title}</h1>
      <BaseTable dataSource={[baseInfo]} columns={columns} pagination={false} />
    </div>
  )
}

export default VProblemDetail
