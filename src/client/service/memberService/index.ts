import { nextAPI } from '@client/core'
import { throwRemoteError } from '@client/error'
import { MemberService } from './memberService'

export const memberServiceRemote = (): MemberService => ({
    async memberInfo() {
        try {
            const response = await nextAPI.get({
                url: `api/auth/member`,
            })
            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
