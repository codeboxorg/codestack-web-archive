import { baseAPI, graphqlAPI } from 'apiService/core'
import { throwRemoteError } from 'apiService/error/remoteError'
import { SubmissionService } from './submissionService'
import { SUBMISSIONS } from './graphqlQueries'

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
      const response = await baseAPI.get({
        url: `/submission/${id}`,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
