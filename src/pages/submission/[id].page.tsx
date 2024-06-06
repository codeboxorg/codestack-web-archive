import { NextSeo } from 'next-seo'
import { API } from '@client/index'
import { SUBMISSION_KEYS } from '@constants/query-key'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { CodeEditor, MonacoEditor } from '@components/on-demand'
import { BaseTable } from '@components/core/common'
import { ColumnsType } from 'antd/es/table'
import { Tag } from 'antd'
import { Converter } from '@utils/convert'

const EDITOR_LANGUAGE = ['c', 'cpp', 'python', 'javascript', 'go'] as const

function SubmissionResultTag(status: string) {
    if (status === 'AC') return <Tag color='green'>정답</Tag>
    if (status === 'WA') return <Tag color='red'>오답</Tag>
    if (status === 'CE') return <Tag color='red'>컴파일 오류</Tag>
    if (status === 'PE') return <Tag color='yellow'>출력 형식 다름</Tag>
    if (status === 'TLE') return <Tag color='red'>시간 초과</Tag>
    if (status === 'MLE') return <Tag color='red'>메모리 초과</Tag>
    if (status === 'OLE') return <Tag color='yellow'>값 출력 초과</Tag>
    return <Tag color='red'>런타임 에러</Tag>
}

const columns: ColumnsType<any> = [
    {
        title: '테스트 케이스',
        dataIndex: 'testcaseId',
        key: 'testcaseId',
    },
    {
        title: '처리 시간',
        dataIndex: 'cpuTime',
        key: 'cpuTime',
        render: (e) => <div>{Converter.convertMillisecond(e, 'MS')}ms</div>,
    },
    {
        title: '메모리 사용량',
        dataIndex: 'memoryUsage',
        key: 'memoryUsage',
        render: (e) => <div>{Converter.convertByte(e, 'KB')}KB</div>,
    },
    {
        title: '상태',
        dataIndex: 'status',
        key: 'status',
        render: (e) => SubmissionResultTag(e),
    },
]
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
                <div className='mt-50'>
                    <BaseTable
                        rowKey={(row) => row.id}
                        dataSource={submissionDetail?.testcases ?? []}
                        columns={columns}
                        pagination={false}
                    />
                </div>
            </div>
        </>
    )
}

export default SubmissionDetailPage
