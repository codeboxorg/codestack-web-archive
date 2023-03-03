import VProblemList from './VProblemList'
import { useRouter } from 'next/router'

type Props = {
  list: Problem[]
}

const columns = [
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

const ProblemList = ({ list }: Props) => {
  const router = useRouter()
  const vProblemListProps = {
    list: list.map((data) => ({
      ...data,
      handleRowClick: () => {
        router.push(`/problem/${data.id}`)
      },
    })),
    columns,
  }
  return <VProblemList {...vProblemListProps} />
}

export default ProblemList
