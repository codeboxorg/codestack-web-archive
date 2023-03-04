import VProblemList from './VProblemList'
import { useRouter } from 'next/router'

type Props = {
  list: Problem[]
}

const ProblemList = ({ list }: Props) => {
  const router = useRouter()
  const vProblemListProps = {
    list: list.map((data) => ({
      ...data,
      handleRowClick: () => {
        router.push(`/problem/${data.id}`)
      },
    })),
  }
  return <VProblemList {...vProblemListProps} />
}

export default ProblemList
