import { useRouter } from 'next/router'
import VSubmissionList, { VSubmissionListProps } from './VSubmissionList'
import { convertByte } from '@utils/convert/convertByte'

type Props = {
  list: Submission[]
}

const SubmissionList = ({ list }: Props) => {
  const router = useRouter()

  const vSubmissionListProps: VSubmissionListProps = {
    list: list.map(({ memory_usage, ...data }) => ({
      ...data,
      memory_usage: convertByte(memory_usage, 'KB'),
      handleRowClick: () => {
        router.push(`/submission/${data.id}`)
      },
    })),
  }
  return <VSubmissionList {...vSubmissionListProps} />
}

export default SubmissionList
