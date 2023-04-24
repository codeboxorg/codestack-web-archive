type Props = {
  detail?: Submission
}

const VSubmissionDetail = ({ detail }: Props) => {
  if (!detail) {
    return <></>
  }

  const { sourceCode, language } = detail
  return <></>
}

export default VSubmissionDetail
