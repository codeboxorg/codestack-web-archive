import {
  OperationVariables,
  QueryHookOptions,
  gql,
  useQuery,
} from '@apollo/client'

const GET_PROBLEMS = gql`
  query Submissions($pageNum: Int) {
    submissions(limit: 20, page: $pageNum) {
      content {
        id
        sourceCode
        cpuTime
        memoryUsage
        problem {
          id
          title
        }
        member {
          username
          nickname
        }
        language {
          id
          name
        }
        statusCode
      }
      pageInfo {
        totalPage
      }
    }
  }
`

export const useSubmissions = (
  options?: QueryHookOptions<Submissions, OperationVariables>
) => {
  const { data, ...rest } = useQuery<Submissions>(GET_PROBLEMS, options)
  return {
    data: data?.submissions,
    ...rest,
  }
}
