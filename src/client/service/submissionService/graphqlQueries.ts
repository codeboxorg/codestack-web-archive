import { gql } from 'graphql-request'

export const SUBMISSIONS = gql`
    query Submissions($pageNum: Int) {
        getSubmissions(limit: 20, offset: $pageNum) {
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

export const SUBMISSION_DETAIL = gql`
    query Submission($id: ID!) {
        getSubmissionById(id: $id) {
            id
            sourceCode
            cpuTime
            memoryUsage
            statusCode
            problem {
                id
                title
            }
            member {
                nickname
            }
            language {
                id
                name
            }
            createdAt
        }
    }
`
