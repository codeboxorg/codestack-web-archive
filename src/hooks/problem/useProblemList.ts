import { api } from '@api/index'
import { PROBLEM_KEYS } from '@constants/query-key'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export const useProblemList = (pageIndex: number, option: Omit<UseQueryOptions<Pagination<Problem>>, 'queryKey'>) =>
    useQuery(PROBLEM_KEYS.list(pageIndex, ''), () => api.problemService.problemList(pageIndex), option)
