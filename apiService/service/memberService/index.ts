import { nextAPI } from '@api/core'
import { throwRemoteError } from '@api/error/remoteError'
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
