import { baseAPI } from '@client/core'
import { throwRemoteError } from '@client/error'

export const problemServiceRemote = () => ({
    problemList: async (pageNum: number) => {
        try {
            const response = await baseAPI.get({ url: '/problem', params: { page: pageNum } })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
    problemDetail: async (id: number) => {
        try {
            const response = await baseAPI.get({ url: `/problem/${id}` })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
    problemSubmit: async (problemId: number, submitData: ProblemSubmitRequest) => {
        try {
            const response = await baseAPI.post({
                url: `/submission`,
                data: { source_code: submitData.sourceCode, problem_id: problemId, language_id: submitData.languageId },
            })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
