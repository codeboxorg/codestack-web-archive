import { useRouter } from 'next/router'
import CommonConverter from '@utils/convert/CommonConverter'
import VSubmissionList, { VSubmissionListProps } from './VSubmissionList'

type Props = {
    list: Submission[]
}

function SubmissionList({ list }: Props) {
    const router = useRouter()

    const vSubmissionListProps: VSubmissionListProps = {
        list: list.map(({ memoryUsage, ...data }) => ({
            ...data,
            memoryUsage: CommonConverter.convertByte(memoryUsage, 'KB'),
            handleRowClick: () => {
                router.push(`/submission/${data.id}`)
            },
        })),
    }
    return <VSubmissionList {...vSubmissionListProps} />
}

export default SubmissionList
