import { baseAPI } from '@client/core'
import { throwRemoteError } from '@client/error'
import { ProblemService } from './problemService'

export const problemServiceRemote = (): ProblemService => ({
    problemList: async (pageNum) => {
        try {
            const response = await baseAPI.get({ url: '/problem', params: { page: pageNum } })
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
            const response = await baseAPI.post({
                url: `/problem/${id}/submit`,
                data: { source_code: submitData.sourceCode, language_id: submitData.languageId },
            })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
