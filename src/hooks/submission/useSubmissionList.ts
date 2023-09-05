import { api } from '@api/index'
import { SUBMISSION_KEYS } from '@constants/query-key'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export const useSubmissionList = (
    pageIndex: number,
    option: Omit<UseQueryOptions<Pagination<Submission>>, 'queryKey'>,
) => useQuery(SUBMISSION_KEYS.list(pageIndex, ''), () => api.submissionService.submissionList(pageIndex), option)
