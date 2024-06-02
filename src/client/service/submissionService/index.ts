import { baseAPI } from '@client/core'
import { throwRemoteError } from '@client/error'
import { SubmissionService } from './submissionService'

export const submissionServiceRemote = (): SubmissionService => ({
    submissionList: async (pageNum) => {
        try {
            const response = await baseAPI.get({ url: `/submission?page=${pageNum}` })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
    submissionDetail: async (id: number) => {
        try {
            const response = await baseAPI.get({ url: `/submission/${id}` })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
