export interface ProblemService {
  problemList(page: number): Promise<Pagination<Problem>>
}
