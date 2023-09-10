interface Pagination<T> {
    content: T[]
    pageInfo: {
        totalPage: number
    }
}
