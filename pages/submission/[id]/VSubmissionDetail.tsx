import { LanguageSupport } from '@codemirror/language'
import { cpp } from '@codemirror/lang-cpp'
import { python } from '@codemirror/lang-python'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'

type Props = {
  detail?: Submission
}

const VSubmissionDetail = ({ detail }: Props) => {
  if (!detail) {
    return <></>
  }
  const languageExtensions: { [name: string]: LanguageSupport } = {
    C: cpp(),
    'C++': cpp(),
    Python: python(),
    Javascript: javascript(),
  }
  const { source_code, language } = detail
  return (
    <CodeMirror
      readOnly
      value={source_code}
      height="480px"
      extensions={[languageExtensions[`Javascript`]]}
    />
  )
}

export default VSubmissionDetail
