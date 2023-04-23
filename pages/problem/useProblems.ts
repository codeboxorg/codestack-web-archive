import {
  OperationVariables,
  QueryHookOptions,
  gql,
  useQuery,
} from '@apollo/client'

const GET_PROBLEMS = gql`
  query Test($pageNum: Int) {
    problems(limit: 20, page: $pageNum) {
      content {
        id
        title
        submission
        accepted
      }
      pageInfo {
        totalPage
      }
    }
  }
`

export const useProblems = (
  options?: QueryHookOptions<
    Record<'problems', Pagination<Problem>>,
    OperationVariables
  >
) => {
  const { data, ...rest } = useQuery<Record<'problems', Pagination<Problem>>>(
    GET_PROBLEMS,
    options
  )
  return {
    data: data?.problems,
    ...rest,
  }
}
