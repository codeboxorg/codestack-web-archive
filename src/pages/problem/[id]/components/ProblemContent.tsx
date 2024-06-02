import { useRootState } from '@hooks/shared'

function ProblemContent() {
    const { description } = useRootState((state) => state.problem.problem)

    return (
        <>
            {description.map((e, i) => (
                <div key={e.title} className='mb-30'>
                    <h2 className='text-2xl'>{e.title}</h2>
                    <pre>{e.content}</pre>
                </div>
            ))}
        </>
    )
}

export default ProblemContent
