import {
  OperationVariables,
  QueryHookOptions,
  gql,
  useQuery,
} from '@apollo/client'

const GET_PROBLEMS = gql`
  query a($username: String){
    matchedUser(username:$username){
      nickname
      username
      profileImage
    }
  }
`

export const useMember = (
  options?: QueryHookOptions<any, OperationVariables>
) => {
  const { data, ...rest } = useQuery<any>(GET_PROBLEMS, options)
  return {
    data: data,
    ...rest,
  }
}
