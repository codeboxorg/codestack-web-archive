import { API } from '@client/index'
import { LoadableButton } from '@components/core/common'
import CodeEditor, { MonacoEditor } from '@components/on-demand/CodeEditor'
import { useProblemInfoForSubmit } from '@hooks/problem'
import { useMutation } from '@tanstack/react-query'
import { Button, Select } from 'antd'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRef, useState } from 'react'

const EDITOR_LANGUAGE = ['', 'c', 'cpp', 'python', 'javascript', 'go'] as const

function SubmitPage() {
    const { problemId, languageList } = useProblemInfoForSubmit()

    const languageSelectOptionList = languageList.map((language) => ({
        value: language.id,
        label: language.name,
    }))

    const [selectedLanguageId, setSelectedLanguageId] = useState(() => languageSelectOptionList[0]?.value)

    const [submitId, setSubmitId] = useState<number | null>(null)

    const editorRef = useRef<MonacoEditor>()

    const handelSubmitSuccess = ({ createSubmission: { id: currentSubmitId } }: SubmitResponse) => {
        setSubmitId(currentSubmitId)
    }

    const { mutate: submitMutate } = useMutation(['submission'], API.problemService.problemSubmit, {
        onSuccess: handelSubmitSuccess,
    })

    const handleCodeSubmit = () => {
        setSubmitId(null)

        submitMutate({
            problemId: Number(problemId),
            languageId: selectedLanguageId,
            sourceCode: editorRef.current?.getValue() ?? '',
        })
    }

    return (
        <>
            <NextSeo title={`${problemId}번 문제 제출`} />
            <h1 className='text-xl font-semibold pt-50'>{problemId}번 문제 제출</h1>
            <div className='mt-15'>
                <Select
                    value={selectedLanguageId}
                    onChange={setSelectedLanguageId}
                    options={languageSelectOptionList}
                    className='min-w-150'
                />
            </div>
            <div className='mt-15'>
                <CodeEditor ref={editorRef} language={EDITOR_LANGUAGE[selectedLanguageId]} />
            </div>
            <div className='flex items-center justify-end mt-15 gap-15'>
                <LoadableButton
                    mutationKey='submission'
                    type='primary'
                    className='bg-blue-500 min-w-80'
                    onClick={handleCodeSubmit}
                >
                    {submitId ? '다시 제출' : '제출'}
                </LoadableButton>
                {submitId && (
                    <Link href={`/submission/${submitId}`}>
                        <Button>결과 확인하기</Button>
                    </Link>
                )}
            </div>
        </>
    )
}

export default SubmitPage
