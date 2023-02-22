import { api } from '@api/index'
import ProblemDetail from '@components/problem/ProblemDetail'
import withGssp from '@server/utils/withGssp'
import wrapper from '@store/configureStore'
import { setProblem } from './problemSlice'

const ProblemDetailPage = () => {
  return <ProblemDetail />
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
