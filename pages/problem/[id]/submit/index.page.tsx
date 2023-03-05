import { useRef } from 'react'
import CodeEditor, { MonacoEditor } from './CodeEditor'
import { Button, Select, message } from 'antd'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { api } from '@api/index'

export type Submit = {
  problemId: number
  languageId: number
  sourceCode: string
}

const SubmitPage = () => {
  const router = useRouter()
  const { id } = router.query
  const editorRef = useRef<MonacoEditor>()

  const handleEditorMount = (editor: MonacoEditor) => {
    editorRef.current = editor
  }

  const handelSubmitSuccess = () => {
    console.log('성공')
  }

  const submitMutation = useMutation(api.problemService.problemSubmit, {
    onSuccess: handelSubmitSuccess,
  })

  //TODO : 서버측 405 이슈 해결후 테스트
  const handleCodeSubmit = () => {
    // submitMutation.mutate({
    //   problemId: Number(id),
    //   languageId: 3,
    //   sourceCode: editorRef.current?.getValue() ?? '',
    // })
    message.info('제출 기능 준비중이에요!')
  }

  return (
    <>
      <Head>
        <title>{id}번 문제 제출</title>
      </Head>
      <h1 className="pt-50 font-semibold text-xl">{id}번 문제 제출</h1>
      <div className="mt-15">
        <Select
          defaultValue={0}
          //TODO : 서버측에 language 정보 요청하기
          options={[
            { value: 0, label: 'Javascript' },
            { value: 1, label: 'C++' },
            { value: 2, label: 'Java' },
            { value: 3, label: 'Python' },
          ]}
          className="min-w-150"
        />
      </div>
      <div className="mt-15">
        <CodeEditor handleEditorMount={handleEditorMount} />
      </div>
      <div className="mt-15 flex justify-end">
        <Button type="primary" className="w-80" onClick={handleCodeSubmit}>
          제출
        </Button>
      </div>
    </>
  )
}

export default SubmitPage
