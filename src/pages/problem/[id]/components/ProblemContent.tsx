import { useRootState } from '@hooks/shared'
import { Input } from 'antd'

const { TextArea } = Input

function get(e: { type: string; title: string; content: string }) {
    if (e.type === 'clipboard') {
        return (
            <div key={e.title} className='mb-30'>
                <h2 className='text-3xl font-semibold pb-10'>{e.title}</h2>
                <TextArea readOnly autoSave='h' value={e.content} />
            </div>
        )
    }
    return (
        <div key={e.title} className='mb-30'>
            <h2 className='text-3xl font-semibold  pb-20'>{e.title}</h2>
            <pre>{e.content}</pre>
        </div>
    )
}
function ProblemContent() {
    const { description } = useRootState((state) => state.problem.problem)

    return <>{description.map((e) => get(e))}</>
}

export default ProblemContent
