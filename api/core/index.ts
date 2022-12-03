import { APICreator } from './APICreator'

const nextAPI = new APICreator(``)
const baseAPI = new APICreator(`${process.env.NEXT_PUBLIC_BASE_API_URL}`)

export { baseAPI, nextAPI }
