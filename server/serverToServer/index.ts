import { oauthServerToServerRemote } from '@server/oauth/oauthService'

const provideAPIService = () => {
  const oauthServerToServer = oauthServerToServerRemote()
  return {
    oauthServerToServer,
  }
}

export const serverToServerAPI = provideAPIService()
