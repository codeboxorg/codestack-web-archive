export interface SubmissionService {
    submissionList(page: number): Promise<Pagination<Submission>>
    submissionDetail(id: number): Promise<Submission>
  }
  