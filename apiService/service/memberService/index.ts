import { baseAPI } from '@api/core'
import { throwRemoteError } from '@api/error/remoteError'
import { MemberService } from './memberService'

export const memberServiceRemote = (): MemberService => ({
  async memberInfo() {
    try {
      const response = await baseAPI.get({
        url: `/member/info`,
      })
      return response.data
    } catch (error) {
      throwRemoteError(error)
    }
  },
})
