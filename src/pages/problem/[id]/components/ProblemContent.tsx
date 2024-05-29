import { useRootState } from '@hooks/shared'

function ProblemContent() {
    const { description } = useRootState((state) => state.problem.problem)

    return (
        <>
            {description.map((e, i) => (
                <div key={e.title}>
                    <h2 className='text-2xl'>{e.title}</h2>
                    <div>{e.content}</div>
                </div>
            ))}
        </>
    )
}

export default ProblemContent
