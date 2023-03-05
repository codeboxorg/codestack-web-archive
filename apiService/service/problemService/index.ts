import { baseAPI } from 'apiService/core'
import { throwRemoteError } from 'apiService/error/remoteError'
import { ProblemService } from './problemService'
import { Submit } from '@pages/problem/[id]/submit/index.page'

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
