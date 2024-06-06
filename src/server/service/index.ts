import { authServerToServerRemote } from './auth/authService'
import { oAuthServerToServerRemote } from './oauth/oAuthService'

const provideAPIService = () => {
    const authServerToServer = authServerToServerRemote()
    const oAuthServerToServer = oAuthServerToServerRemote()

    return {
        authServerToServer,
        oAuthServerToServer,
    }
}

export default provideAPIService()
