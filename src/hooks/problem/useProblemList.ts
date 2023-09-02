import { api } from '@api/index'
import { problemKeys } from '@pages/problem/queryKey'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export const useProblemList = (pageIndex: number, option: Omit<UseQueryOptions<Pagination<Problem>>, 'queryKey'>) =>
    useQuery(problemKeys.list(pageIndex, ''), () => api.problemService.problemList(pageIndex), option)
