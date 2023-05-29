import renderEnv from '@utils/renderEnv'
import { ApiCreator } from './ApiCreator'
import { GraphqlApiCreator } from './GraphqlApiCreator'

//next 자체서버 (pages/api)로의 요청용
const nextAPI = new ApiCreator(`/`)

/**
 * 메인 api 서버 요청용 dev모드에서 SSR시와 CSR시 proxy 사용 유무가 달라지므로 분기
 * CSR시에 BASE_API_URL은 undefined이므로 /proxy 사용 URL로 변경된다.
 */
const baseAPI = renderEnv.isSSR
    ? new ApiCreator(`${process.env.NEXT_SERVER_BASE_API_URL}`)
    : new ApiCreator(`${process.env.NEXT_PUBLIC_BASE_API_URL}`)

const graphqlAPI = renderEnv.isSSR
    ? new GraphqlApiCreator(`${process.env.NEXT_SERVER_GRAPHQL_BASE_API_URL}`)
    : new GraphqlApiCreator(`${process.env.NEXT_PUBLIC_GRAPHQL_BASE_API_URL}`)

export { baseAPI, nextAPI, graphqlAPI }
