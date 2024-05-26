import { API } from '@client/index'
import { useRootState } from '@hooks/shared'
import { withGssp } from '@server/index'
import wrapper from '@store/configureStore'
import { setProblem } from '@store/problem'
import { NextSeo } from 'next-seo'
import { ProblemSubmitButton, ProblemContent } from './components'
import ProblemInfoTable from './components/ProblemInfoTable'
import ProblemTitle from './components/ProblemTitle'

export const getServerSideProps = withGssp(
    wrapper.getServerSideProps((store) => async (context) => {
        const problem = await API.problemService.problemDetail(Number(context.params!.id))
        store.dispatch(setProblem(problem))

        return {
            props: {},
        }
    }),
)

function ProblemDetailPage() {
    const { id, name } = useRootState((state) => state.problem.problem)

    return (
        <>
            <NextSeo title={`${id}번 - ${name}`} />
            <ProblemTitle />
            <ProblemInfoTable />
            <ProblemContent />
            <div className='mt-40 flex justify-end pb-50'>
                <ProblemSubmitButton />
            </div>
        </>
    )
}

export default ProblemDetailPage
