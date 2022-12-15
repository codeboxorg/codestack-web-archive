import { GetServerSideProps } from 'next'
import CodeMirror from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { python } from '@codemirror/lang-python'
import { api } from '@api/index'
import { LanguageSupport } from '@codemirror/language'

const ProblemPage = (submission: Submission) => {
  //TODO: 추후 언어 이름이 아닌 db에서 언어를 나타내는 string 으로 분리
  const languageExtensions: { [name: string]: LanguageSupport } = {
    C: cpp(),
    'C++': cpp(),
    Python: python(),
  }
  return (
    <>
      <CodeMirror
        readOnly
        value={submission.source_code}
        height="480px"
        extensions={[languageExtensions[submission.language.name]]}
      />
    </>
  )
}

export default ProblemPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await api.submissionService.submissionDetail(
    Number(context.params!.id)
  )
  return {
    props: res,
  }
}
