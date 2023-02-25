type Props = {
  detail?: Submission
}

const VSubmissionDetail = ({ detail }: Props) => {
  if (!detail) {
    return <></>
  }

  const { source_code, language } = detail
  return <></>
}

export default VSubmissionDetail
