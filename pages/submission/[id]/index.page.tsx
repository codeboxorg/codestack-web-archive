import { NextSeo } from 'next-seo'
import SubmissionDetail from './SubmissionDetail'

function SubmissionDetailPage() {
    return (
        <>
            <NextSeo title='제출 결과' />
            <SubmissionDetail />
        </>
    )
}

export default SubmissionDetailPage
