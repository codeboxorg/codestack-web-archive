const problemKeys = {
  all: ['problem'] as const,
  lists: () => [...problemKeys.all, 'list'] as const,
  list: (filters: string) => [...problemKeys.lists(), { filters }] as const,
}

export { problemKeys }
