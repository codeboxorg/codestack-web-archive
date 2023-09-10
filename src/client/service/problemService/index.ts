import { graphqlAPI } from '@client/core'
import { throwRemoteError } from '@client/error'
import { PROBLEMS, PROBLEM_DETAIL, PROBLEM_SUBMIT } from './graphqlQueries'
import { ProblemService } from './problemService'

export const problemServiceRemote = (): ProblemService => ({
    problemList: async (pageNum) => {
        try {
            const response = await graphqlAPI.request({
                document: PROBLEMS,
                params: { pageNum },
            })
            return response.getProblems
        } catch (error) {
            throwRemoteError(error)
        }
    },
    problemDetail: async (id) => {
        try {
            const response = await graphqlAPI.request({
                document: PROBLEM_DETAIL,
                params: { id },
            })
            return response.getProblemById
        } catch (error) {
            throwRemoteError(error)
        }
    },
    problemSubmit: async (submit) => {
        try {
            const response = await graphqlAPI.request({
                document: PROBLEM_SUBMIT,
                params: {
                    problemId: submit.problemId,
                    languageId: submit.languageId,
                    sourceCode: submit.sourceCode,
                },
            })
            return response
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
