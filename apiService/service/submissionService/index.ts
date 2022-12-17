import { baseAPI } from 'apiService/core'
import { throwRemoteError } from 'apiService/error/remoteError'
import { SubmissionService } from './submissionService'

export const submissionServiceRemote = (): SubmissionService => ({
  submissionList: async (page) => {
    try {
      const response = await baseAPI.get({
        url: `/submission`,
        params: { page },
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
  submissionDetail: async (id: number) => {
    try {
      const response = await baseAPI.get({
        url: `/submission/${id}`,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
