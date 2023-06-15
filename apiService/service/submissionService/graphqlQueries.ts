import { gql } from 'graphql-request'

export const SUBMISSIONS = gql`
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

export const SUBMISSION_DETAIL = gql`
    query Submission($id: ID) {
        submission(id: $id) {
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
