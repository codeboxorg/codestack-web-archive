import { Button } from 'antd'
import Link from 'next/link'

type CodeSubmitButtonProps = Pick<Problem, 'id' | 'language'>

const CodeSubmitButton = ({ id, language }: CodeSubmitButtonProps) => {
  return (
    <>
      <Link
        href={{
          pathname: `[id]/submit`,
          query: { id, languageJSON: JSON.stringify(language) },
        }}
        as={`${id}/submit`}
      >
        <Button>풀이 제출</Button>
      </Link>
    </>
  )
}

export default CodeSubmitButton
