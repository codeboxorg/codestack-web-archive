import { Submit } from '@pages/problem/[id]/submit/index.page'

export interface ProblemService {
  problemList(page: number): Promise<Pagination<Problem>>
  problemDetail(id: number): Promise<Problem>
  problemSubmit(submit: Submit): Promise<unknown>
}
