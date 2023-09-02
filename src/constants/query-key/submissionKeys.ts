export const SUBMISSION_KEYS = {
    all: ['submission'] as const,
    lists: () => [...SUBMISSION_KEYS.all, 'list'] as const,
    list: (pageNum: number, filters: string) => [...SUBMISSION_KEYS.lists(), { filters, pageNum }] as const,
    detail: () => [...SUBMISSION_KEYS.all, 'detail'] as const,
}
