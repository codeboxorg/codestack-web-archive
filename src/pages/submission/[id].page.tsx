import { NextSeo } from 'next-seo'
import { API } from '@client/index'
import { SUBMISSION_KEYS } from '@constants/query-key'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { CodeEditor, MonacoEditor } from '@components/on-demand'

const EDITOR_LANGUAGE = ['c', 'cpp', 'python', 'javascript', 'go'] as const

function SubmissionDetailPage() {
    const router = useRouter()
    const editorRef = useRef<MonacoEditor>()
    const { id } = router.query
    const { data: submissionDetail } = useQuery(SUBMISSION_KEYS.detail(), () =>
        API.submissionService.submissionDetail(Number(id)),
    )
    return (
        <>
            <NextSeo title='제출 결과' />
            <div className='mt-15'>
                <CodeEditor
                    readonly
                    ref={editorRef}
                    value={submissionDetail?.sourceCode}
                    language={EDITOR_LANGUAGE[1]}
                />
            </div>
        </>
    )
}

export default SubmissionDetailPage
