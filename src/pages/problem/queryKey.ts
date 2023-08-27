const problemKeys = {
    all: ['problem'] as const,
    lists: () => [...problemKeys.all, 'list'] as const,
    list: (pageNum: number, filters: string) => [...problemKeys.lists(), { filters, pageNum }] as const,
}

export { problemKeys }
