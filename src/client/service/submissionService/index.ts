import { graphqlAPI } from '@client/core'
import { throwRemoteError } from '@client/error'
import { SUBMISSIONS, SUBMISSION_DETAIL } from './graphqlQueries'
import { SubmissionService } from './submissionService'

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
