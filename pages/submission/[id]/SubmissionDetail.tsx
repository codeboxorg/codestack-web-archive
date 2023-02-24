import VSubmissionDetail from './VSubmissionDetail'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { api } from '@api/index'
import { submissionKeys } from '../queryKey'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const VAC = dynamic(import('react-vac'), { ssr: false })

const SubmissionDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: submissionDetail } = useQuery(submissionKeys.detail(), () =>
    api.submissionService.submissionDetail(Number(id))
  )
  const vSubmissionDetailProps = {
    detail: submissionDetail,
  }

  return (
    <>
      <Suspense>
        <VAC name="VSubmissionDetail" data={vSubmissionDetailProps} />
      </Suspense>
      <VSubmissionDetail {...vSubmissionDetailProps} />
    </>
  )
}

export default SubmissionDetail
