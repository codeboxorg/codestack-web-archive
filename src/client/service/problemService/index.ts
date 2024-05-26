import { baseAPI, graphqlAPI } from '@client/core'
import { throwRemoteError } from '@client/error'
import { PROBLEM_SUBMIT } from './graphqlQueries'
import { ProblemService } from './problemService'

export const problemServiceRemote = (): ProblemService => ({
    problemList: async (pageNum) => {
        try {
            const response = await baseAPI.get({ url: '/problem' })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
    problemDetail: async (id) => {
        try {
            const response = await baseAPI.get({ url: `/problem/${id}` })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
    problemSubmit: async (id, submitData) => {
        try {
            const response = await graphqlAPI.request({
                document: PROBLEM_SUBMIT,
                params: {
                    problemId: id,
                    ...submitData,
                },
            })
            return response
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
