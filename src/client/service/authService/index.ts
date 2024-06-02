import { baseAPI, nextAPI } from '@client/core'
import { throwRemoteError } from '@client/error'

import { API } from '@client/index'
import { AuthService } from './authService'

export const authServiceRemote = (): AuthService => ({
    async signUp(formData) {
        try {
            const response = await baseAPI.post({
                url: `/auth/register`,
                data: formData,
            })

            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },

    async signIn(formData) {
        try {
            const response = await nextAPI.post({
                url: `api/auth/sign-in`,
                data: formData,
            })

            baseAPI.setDefaultAuthorizationHeader(response.data.accessToken)

            const user = await API.memberService.memberInfo()

            return { ...response.data, ...user }
        } catch (error) {
            throwRemoteError(error)
        }
    },

    async signOut() {
        try {
            const response = await nextAPI.post({
                url: `api/auth/sign-out`,
            })

            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },

    async member() {
        try {
            const response = await nextAPI.post({
                url: `api/auth/me`,
            })

            baseAPI.setDefaultAuthorizationHeader(response.data.accessToken)

            return response.data
        } catch (error) {
            throwRemoteError(error)
        }
    },
})
