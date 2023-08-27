const submissionKeys = {
    all: ['submission'] as const,
    lists: () => [...submissionKeys.all, 'list'] as const,
    list: (pageNum: number, filters: string) => [...submissionKeys.lists(), { filters, pageNum }] as const,
    detail: () => [...submissionKeys.all, 'detail'] as const,
}

export { submissionKeys }
