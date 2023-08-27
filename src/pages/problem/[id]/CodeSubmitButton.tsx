import { Button } from 'antd'
import Link from 'next/link'

type CodeSubmitButtonProps = Pick<Problem, 'id' | 'languages'>

function CodeSubmitButton({ id, languages }: CodeSubmitButtonProps) {
    return (
        <Link
            href={{
                pathname: `[id]/submit`,
                query: { id, languageJSON: JSON.stringify(languages) },
            }}
            as={`${id}/submit`}
        >
            <Button>풀이 제출</Button>
        </Link>
    )
}

export default CodeSubmitButton
