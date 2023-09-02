export const TAG_KEYS = {
    all: ['tag'] as const,
    lists: () => [...TAG_KEYS.all, 'list'] as const,
    list: (pageNum: number, filters: string) => [...TAG_KEYS.lists(), { filters, pageNum }] as const,
    detail: () => [...TAG_KEYS.all, 'detail'] as const,
}
