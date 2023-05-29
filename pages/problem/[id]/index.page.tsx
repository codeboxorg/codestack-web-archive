import { api } from '@api/index'
import { useRootState } from '@hooks/useRootSelector'
import withGssp from '@server/utils/withGssp'
import wrapper from '@store/configureStore'
import { NextSeo } from 'next-seo'
import { setProblem } from '../problemSlice'
import CodeSubmitButton from './CodeSubmitButton'
import ProblemDetail from './ProblemDetail'

function ProblemDetailPage() {
    const { id, title, languages } = useRootState((state) => state.problem.problem)

    return (
        <>
            <NextSeo title={`${id}번 - ${title}`} />
            <div className='pt-50'>
                <ProblemDetail />
            </div>
            <div className='mt-40 flex justify-end pb-50'>
                <CodeSubmitButton id={id} languages={languages} />
            </div>
        </>
    )
}

export default ProblemDetailPage
export const getServerSideProps = withGssp(
    wrapper.getServerSideProps((store) => async (context) => {
        const problem = await api.problemService.problemDetail(Number(context.params!.id))
        store.dispatch(setProblem(problem))
        return {
            props: {},
        }
    }),
)
