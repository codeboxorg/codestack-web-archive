import renderEnv from '@utils/renderEnv'
import { APICreator } from './APICreator'

//next 자체서버 (pages/api)로의 요청용
const nextAPI = new APICreator(``)

/**
 * 메인 api 서버 요청용 dev모드에서 SSR시와 CSR시 proxy 사용 유무가 달라지므로 분기
 * CSR시에 BASE_API_URL은 undefined이므로 /proxy 사용 URL로 변경된다.
 */
const baseAPI = renderEnv.isSSR
  ? new APICreator(`${process.env.NEXT_SERVER_BASE_API_URL}`)
  : new APICreator(`${process.env.NEXT_PUBLIC_BASE_API_URL}`)

export { baseAPI, nextAPI }
