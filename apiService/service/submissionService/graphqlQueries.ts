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
