import VSubmissionList from './VSubmissionList'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useRouter } from 'next/router'
import convertByte from '@utils/convert/convertByte'

const VAC = dynamic(import('react-vac'), { ssr: false })

type Props = {
  list: Submission[]
}

const SubmissionList = ({ list }: Props) => {
  const router = useRouter()

  const vSubmissionListProps = {
    list: list.map(({ memory_usage, ...data }, idx) => ({
      ...data,
      memory_usage:convertByte(memory_usage, 'KB'),
      handleRowClick: () => {
        router.push(`/submission/${data.id}`)
      },
    })),
  }
  return (
    <>
      <VSubmissionList />
      <Suspense>
        <VAC
          name="VSubmissionList"
          data={vSubmissionListProps}
          useList="list"
        />
      </Suspense>
    </>
  )
}

export default SubmissionList
