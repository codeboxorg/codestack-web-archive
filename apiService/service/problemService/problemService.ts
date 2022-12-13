export interface ProblemService {
  problemList(page: number): Promise<Pagination<Problem>>
  problemDetail(id: number): Promise<Problem>
}
