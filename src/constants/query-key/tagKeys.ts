export const tagKeys = {
    all: ['tag'] as const,
    lists: () => [...tagKeys.all, 'list'] as const,
    list: (pageNum: number, filters: string) => [...tagKeys.lists(), { filters, pageNum }] as const,
    detail: () => [...tagKeys.all, 'detail'] as const,
}
