import { ProblemService } from '@api/service/problemService/problemService'
import { problemMockData, problemSubmitResponseMockData } from './mockData'

export const problemServiceMock = () => ({
    problemSubmit: async () => {
        return problemSubmitResponseMockData
    },
})
