import { api } from '@api/index'
import { useRootState } from '@hooks/useRootSelector'
import withGssp from '@server/utils/withGssp'
import wrapper from '@store/configureStore'
import { Select } from 'antd'
import Head from 'next/head'
import { useState } from 'react'
import { setProblem } from '../problemSlice'
import CodeEditor from './CodeEditor'
import ProblemDetail from './ProblemDetail'

const ProblemDetailPage = () => {
  const { id, title, language } = useRootState((state) => state.problem.problem)
  const [languageId, setLanguageId] = useState<number>()

  return (
    <>
      <Head>
        <title>
          {id} : {title}
        </title>
      </Head>
      <ProblemDetail />
      <Select
        defaultValue={language?.[0].id}
        style={{ width: 120 }}
        onChange={setLanguageId}
        options={language.map((p, i) => ({ value: p.id, label: p.name }))}
      />
      <CodeEditor />
    </>
  )
}

export default ProblemDetailPage
export const getServerSideProps = withGssp(
  wrapper.getServerSideProps((store) => async (context) => {
    const problem = await api.problemService.problemDetail(
      Number(context.params!.id)
    )
    store.dispatch(setProblem(problem))
    return {
      props: {},
    }
  })
)
