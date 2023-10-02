import { API } from '@client/index'
import { PROBLEM_KEYS } from '@constants/query-key'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

export const useProblemSubmit = (problemId: number) => {
    const [submitId, setSubmitId] = useState<number>()

    const handleSubmitMutate = () => {
        setSubmitId(undefined)
    }

    const handelSubmitSuccess = ({ createSubmission: { id: currentSubmitId } }: ProblemSubmitResponse) => {
        setSubmitId(currentSubmitId)
    }

    const mutation = useMutation(
        PROBLEM_KEYS.submit(),
        (submitData: ProblemSubmitRequest) => API.problemService.problemSubmit(problemId, submitData),
        {
            onSuccess: handelSubmitSuccess,
            onMutate: handleSubmitMutate,
        },
    )

    return {
        submitId,
        ...mutation,
    }
}
