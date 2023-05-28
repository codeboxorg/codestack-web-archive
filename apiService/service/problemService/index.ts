import { baseAPI, graphqlAPI } from 'apiService/core'
import { throwRemoteError } from 'apiService/error/remoteError'
import { PROBLEMS } from './graphqlQueries'
import { ProblemService } from './problemService'

export const problemServiceRemote = (): ProblemService => ({
  problemList: async (pageNum) => {
    try {
      const response = await graphqlAPI.request({
        document: PROBLEMS,
        params: { pageNum },
      })
      return response.problems
    } catch (error) {
      throwRemoteError(error)
    }
  },
  problemDetail: async (id) => {
    try {
      const response = await baseAPI.get({
        url: `/problem/${id}`,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
  problemSubmit: async (submit) => {
    try {
      const response = await baseAPI.post({
        url: `/submission`,
        data: submit,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
