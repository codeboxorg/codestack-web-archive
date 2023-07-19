import { graphqlAPI } from 'apiService/core'
import { throwRemoteError } from '@api/error/throwRemoteError'
import { SubmissionService } from './submissionService'
import { SUBMISSIONS, SUBMISSION_DETAIL } from './graphqlQueries'

export const submissionServiceRemote = (): SubmissionService => ({
    submissionList: async (pageNum) => {
        try {
            const response = await graphqlAPI.request({
                document: SUBMISSIONS,
                params: { pageNum },
            })
            return response.submissions
        } catch (error) {
            throwRemoteError(error)
        }
    },
    submissionDetail: async (id: number) => {
        try {
            const response = await graphqlAPI.request({
                document: SUBMISSION_DETAIL,
                params: { id },
            })
            return response.submission
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
