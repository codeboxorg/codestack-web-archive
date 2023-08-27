import { graphqlAPI } from '@api/core'
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
            return response.getSubmissions
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
            return response.getSubmissionById
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
