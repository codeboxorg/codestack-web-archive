import { getPercentage } from '@utils/percentage'
import VProblemList, { VProblemProps } from './VProblemList'
import { useRouter } from 'next/router'

type Props = {
  list: Problem[]
}

const ProblemList = ({ list }: Props) => {
  const router = useRouter()
  const vProblemListProps: VProblemProps = {
    list: list.map((data) => ({
      ...data,
      handleRowClick: () => {
        router.push(`/problem/${data.id}`)
      },
      acceptPer: getPercentage(data.submission, data.accepted).toFixed(2) + '%',
    })),
  }
  return <VProblemList {...vProblemListProps} />
}

export default ProblemList
