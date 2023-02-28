import { api } from '@api/index'
import { useRootState } from '@hooks/useRootSelector'
import withGssp from '@server/utils/withGssp'
import wrapper from '@store/configureStore'
import Head from 'next/head'
import { setProblem } from '../problemSlice'
import CodeEditor from './CodeEditor'
import ProblemDetail from './ProblemDetail'

const ProblemDetailPage = () => {
  const { id, title } = useRootState((state) => state.problem.problem)

  return (
    <>
      <Head>
        <title>
          {id} : {title}
        </title>
      </Head>
      <ProblemDetail />
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
