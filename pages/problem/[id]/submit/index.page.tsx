import { api } from '@api/index'
import LoadableButton from '@components/shared/LoadableButton'
import { useMutation } from '@tanstack/react-query'
import { Button, Select } from 'antd'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import CodeEditor, { MonacoEditor } from './CodeEditor'

export type Submit = {
    problemId: number
    languageId: number
    sourceCode: string
}

function SubmitPage() {
    const { isReady: routerIsReady, query, push: routerPush } = useRouter()
    const { id, languageJSON } = query

    const language =
        typeof languageJSON === 'string'
            ? (JSON.parse(languageJSON) as Language[]).map(({ name, id: languageId }) => ({
                  value: languageId,
                  label: name,
              }))
            : []

    const [selectedLanguageId, setSelectedLanguageId] = useState<number>(() => language[0]?.value)

    const [submitId, setSubmitId] = useState<number | null>(null)

    const editorRef = useRef<MonacoEditor>()

    const handleEditorMount = (editor: MonacoEditor) => {
        editorRef.current = editor
    }

    const handelSubmitSuccess = ({ id: currentSubmitId }: SubmitRes) => {
        setSubmitId(currentSubmitId)
    }

    const { mutate: submitMutate } = useMutation(['submission'], api.problemService.problemSubmit, {
        onSuccess: handelSubmitSuccess,
    })

    const handleCodeSubmit = () => {
        setSubmitId(null)
        submitMutate({
            problemId: Number(id),
            languageId: selectedLanguageId,
            sourceCode: editorRef.current?.getValue() ?? '',
        })
    }

    useEffect(() => {
        if (!languageJSON && routerIsReady) routerPush({ pathname: `/problem/[id]`, query: { id } }, `/problem/${id}`)
    }, [languageJSON, id, routerIsReady, routerPush])

    return (
        <>
            <NextSeo title={`${id}번 문제 제출`} />
            <h1 className='pt-50 font-semibold text-xl'>{id}번 문제 제출</h1>
            <div className='mt-15'>
                <Select
                    value={selectedLanguageId}
                    onChange={setSelectedLanguageId}
                    options={language}
                    className='min-w-150'
                />
            </div>
            <div className='mt-15'>
                <CodeEditor languageId={selectedLanguageId} handleEditorMount={handleEditorMount} />
            </div>
            <div className='mt-15 flex justify-end gap-15 items-center'>
                <LoadableButton mutationKey='submission' type='primary' className='min-w-80' onClick={handleCodeSubmit}>
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
