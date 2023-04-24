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
  options?: QueryHookOptions<Problems, OperationVariables>
) => {
  const { data, ...rest } = useQuery<Problems>(GET_PROBLEMS, options)
  return {
    data: data?.problems,
    ...rest,
  }
}
