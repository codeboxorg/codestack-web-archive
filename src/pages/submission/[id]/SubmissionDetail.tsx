import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { api } from '@api/index'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { submissionKeys } from '../queryKey'
import VSubmissionDetail from './VSubmissionDetail'

const VAC = dynamic(import('react-vac'), { ssr: false })

function SubmissionDetail() {
    const router = useRouter()
    const { id } = router.query
    const { data: submissionDetail } = useQuery(submissionKeys.detail(), () =>
        api.submissionService.submissionDetail(Number(id)),
    )
    const vSubmissionDetailProps = {
        detail: submissionDetail,
    }

    return (
        <>
            <Suspense>
                <VAC name='VSubmissionDetail' data={vSubmissionDetailProps} />
            </Suspense>
            <VSubmissionDetail {...vSubmissionDetailProps} />
        </>
    )
}

export default SubmissionDetail
