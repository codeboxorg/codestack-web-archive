export interface ProblemService {
    problemList(pageNum: number): Promise<Pagination<Problem>>
    problemDetail(id: number): Promise<Problem>
    problemSubmit(submit: SubmitRequest): Promise<SubmitResponse>
}
