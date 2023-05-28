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

export const PROBLEM_DETAIL = gql`
  query ProblemDetail($id: ID) {
    problem(id: $id) {
      id
      maxCpuTime
      maxMemory
      title
      context
      submission
      accepted
      tags {
        id
        name
      }
      languages {
        id
        name
        extension
      }
    }
  }
`
