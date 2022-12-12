import { baseAPI, nextAPI } from 'apiService/core'
import { throwRemoteError } from 'apiService/error/remoteError'
import { ProblemService } from './problemService'

export const problemServiceRemote = (): ProblemService => ({
  problemList: async (page) => {
    try {
      const response = await baseAPI.get({
        url: `/problem`,
        params: { page },
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
