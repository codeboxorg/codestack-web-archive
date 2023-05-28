import { gql } from 'graphql-request'

export const PROBLEMS = gql`
  query Problems($pageNum: Int) {
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
