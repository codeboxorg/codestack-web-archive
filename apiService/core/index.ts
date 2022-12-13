import { APICreator } from './APICreator'

//next 자체서버 (pages/api)로의 요청용
const nextAPI = new APICreator(``)
//메인 api 서버 요청용
const baseAPI = new APICreator(`${process.env.NEXT_PUBLIC_BASE_API_URL}`)

export { baseAPI, nextAPI }
