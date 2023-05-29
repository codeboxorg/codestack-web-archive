import { useRouter } from 'next/router'
import { convertByte } from '@utils/convert/convertByte'
import VSubmissionList, { VSubmissionListProps } from './VSubmissionList'

type Props = {
    list: Submission[]
}

function SubmissionList({ list }: Props) {
    const router = useRouter()

    const vSubmissionListProps: VSubmissionListProps = {
        list: list.map(({ memoryUsage, ...data }) => ({
            ...data,
            memoryUsage: convertByte(memoryUsage, 'KB'),
            handleRowClick: () => {
                router.push(`/submission/${data.id}`)
            },
        })),
    }
    return <VSubmissionList {...vSubmissionListProps} />
}

export default SubmissionList
