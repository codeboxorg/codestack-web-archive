export const PROBLEM_KEYS = {
    all: ['problem'] as const,
    lists: () => [...PROBLEM_KEYS.all, 'list'] as const,
    list: (pageNum: number, filters: string) => [...PROBLEM_KEYS.lists(), { filters, pageNum }] as const,
    submit: () => [...PROBLEM_KEYS.all, 'submit'] as const,
}
