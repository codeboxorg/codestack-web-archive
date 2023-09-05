import { api } from '@api/index'
import { TAG_KEYS } from '@constants/query-key'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export const useTagList = (pageIndex: number, option: Omit<UseQueryOptions<Pagination<Tag>>, 'queryKey'>) =>
    useQuery(TAG_KEYS.list(pageIndex, ''), () => api.tagService.tagList(pageIndex), option)
