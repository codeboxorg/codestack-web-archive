import { useRootState } from '@hooks/shared'
import 'twin.macro'

function ProblemTitle() {
    const { id, title } = useRootState((state) => state.problem.problem)

    return (
        <div tw='mt-30'>
            <div className='rounded-md bg-blue-500 px-15 py-7 text-white inline-block'>{id}번 문제</div>
            <h1 className='mt-30 mb-30 text-3xl font-semibold'>{title}</h1>
        </div>
    )
}

export default ProblemTitle
