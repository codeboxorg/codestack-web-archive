import { authServerToServerRemote } from './service/auth/authService'
import { oAuthServerToServerRemote } from './service/oauth/oAuthService'

const provideAPIService = () => {
    const authServerToServer = authServerToServerRemote()
    const oAuthServerToServer = oAuthServerToServerRemote()

    return {
        authServerToServer,
        oAuthServerToServer,
    }
}

export default provideAPIService()
