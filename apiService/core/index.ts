import renderEnv from '@utils/renderEnv'
import { APICreator } from './APICreator'

const nextAPI = new APICreator(`/`)

const baseAPI = renderEnv.isSSR
  ? new APICreator(`${process.env.NEXT_SERVER_BASE_API_URL}`)
  : new APICreator(`${process.env.NEXT_PUBLIC_BASE_API_URL}`)

export { baseAPI, nextAPI }
