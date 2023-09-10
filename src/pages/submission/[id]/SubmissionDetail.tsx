import { API } from '@client/index'
import { SUBMISSION_KEYS } from '@constants/query-key'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import VSubmissionDetail from './VSubmissionDetail'

const VAC = dynamic(import('react-vac'), { ssr: false })

function SubmissionDetail() {
    const router = useRouter()
    const { id } = router.query
    const { data: submissionDetail } = useQuery(SUBMISSION_KEYS.detail(), () =>
        API.submissionService.submissionDetail(Number(id)),
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
