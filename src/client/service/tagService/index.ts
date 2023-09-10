import { graphqlAPI } from '@client/core'
import { throwRemoteError } from '@client/error'
import { TAGS } from './graphqlQueries'
import { TagService } from './tagService'

export const tagServiceRemote = (): TagService => ({
    tagList: async (pageNum) => {
        try {
            const response = await graphqlAPI.request({
                document: TAGS,
                params: { pageNum },
            })
            return response.getAllTag
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
