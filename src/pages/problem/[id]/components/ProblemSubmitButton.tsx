import { useRootState } from '@hooks/shared'
import { Button } from 'antd'
import Link from 'next/link'

function ProblemSubmitButton() {
    const { id, languages } = useRootState((state) => state.problem.problem)

    return (
        <Link
            href={{
                pathname: `[id]/submit`,
                query: { id, languageListJSON: JSON.stringify(languages) },
            }}
            as={`${id}/submit`}
        >
            <Button>풀이 제출</Button>
        </Link>
    )
}

export default ProblemSubmitButton
