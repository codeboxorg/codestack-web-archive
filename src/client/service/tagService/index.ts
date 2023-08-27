import { graphqlAPI } from '@api/core'
import { throwRemoteError } from '@api/error/throwRemoteError'
import { gql } from 'graphql-request'
import { TagService } from './tagService'

export const tagServiceRemote = (): TagService => ({
    tagList: async (pageNum) => {
        try {
            const response = await graphqlAPI.request({
                document: gql`
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
                `,
                params: { pageNum },
            })
            return response.getAllTag
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
