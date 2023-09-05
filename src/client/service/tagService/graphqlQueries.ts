import { gql } from 'graphql-request'

export const TAGS = gql`
    query ($pageNum: Int) {
        getAllTag(limit: 10, offset: $pageNum) {
            content {
                id
                name
            }
            pageInfo {
                totalPage
            }
        }
    }
`
