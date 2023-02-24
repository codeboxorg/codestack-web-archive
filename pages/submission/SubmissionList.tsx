import VSubmissionList from './VSubmissionList'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useRouter } from 'next/router'

const VAC = dynamic(import('react-vac'), { ssr: false })

type Props = {
  list: Submission[]
}

const SubmissionList = ({ list }: Props) => {
  const router = useRouter()

  const vSubmissionListProps = {
    list: list.map((data, idx) => ({
      ...data,
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
