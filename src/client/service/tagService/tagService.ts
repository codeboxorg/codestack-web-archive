export interface TagService {
    tagList(pageNum: number): Promise<Pagination<Tag>>
}
