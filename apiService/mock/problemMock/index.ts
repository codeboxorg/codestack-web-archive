import { ProblemService } from '@api/service/problemService/problemService'
import { problemMockData } from './mockData'

export const problemServiceMock = (): ProblemService => ({
  problemList: async () => {
    return {
      content: [problemMockData],
      page_number: 1,
      total_pages: 1,
      total_elements: 1,
    }
  },
  problemDetail: async (id) => {
    return null as any
  },
  problemSubmit: async (submit) => {
    return null as any
  },
})
