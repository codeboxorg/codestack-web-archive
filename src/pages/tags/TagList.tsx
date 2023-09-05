import VTagList, { VTagListProps } from './VTagList'

type Props = {
    list: Tag[]
}

function TagList({ list }: Props) {
    const vSubmissionListProps: VTagListProps = {
        list,
    }

    return <VTagList {...vSubmissionListProps} />
}

export default TagList
