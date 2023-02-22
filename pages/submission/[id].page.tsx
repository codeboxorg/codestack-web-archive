import { api } from '@api/index'
import { cpp } from '@codemirror/lang-cpp'
import { python } from '@codemirror/lang-python'
import { LanguageSupport } from '@codemirror/language'
import { useRootState } from '@hooks/useRootSelector'
import withAuthGssp from '@server/utils/withAuthGssp'
import wrapper from '@store/configureStore'
import CodeMirror from '@uiw/react-codemirror'
import { GetServerSideProps } from 'next'
import { setSubmission } from './submissionSlice'

const SubmissionDetailPage = () => {
  const { source_code, language } = useRootState(
    (state) => state.submission.submission
  )

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
        value={source_code}
        height="480px"
        extensions={[languageExtensions[language.name]]}
      />
    </>
  )
}

export default SubmissionDetailPage

export const getServerSideProps: GetServerSideProps = withAuthGssp(
  wrapper.getServerSideProps((store) => async (context) => {
    const submissionId = Number(context.params!.id)
    const submission = await api.submissionService.submissionDetail(
      submissionId
    )
    store.dispatch(setSubmission(submission))
    return {
      props: {},
    }
  })
)
