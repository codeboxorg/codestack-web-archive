type Props = {
    detail?: Submission
}

// TODO: 추후 컴포넌트 작성
function VSubmissionDetail({ detail }: Props) {
    return <>{JSON.stringify(detail)}</>
}

export default VSubmissionDetail
