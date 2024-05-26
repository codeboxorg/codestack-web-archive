import { RenderEnvironment } from '@utils/render-environment'
import { GraphQLAPI, createGraphQLInstance } from './graphql'
import { RestAPI, createAxiosInstance } from './rest'

const nextAPI = new RestAPI(createAxiosInstance(`/`))

/**
 * 메인 api 서버 요청용 dev모드에서 SSR시와 CSR시 proxy 사용 유무가 달라지므로 분기
 * CSR시에 BASE_API_URL은 undefined이므로 /proxy 사용 URL로 변경됨.
 */
const baseAPI = RenderEnvironment.isSSR
    ? new RestAPI(createAxiosInstance(`${process.env.NEXT_SERVER_BASE_API_URL}`))
    : new RestAPI(createAxiosInstance(`${process.env.NEXT_SERVER_BASE_API_URL}`))

const graphqlAPI = RenderEnvironment.isSSR
    ? new GraphQLAPI(createGraphQLInstance(`${process.env.NEXT_SERVER_GRAPHQL_BASE_API_URL}`))
    : new GraphQLAPI(createGraphQLInstance(`${process.env.NEXT_PUBLIC_GRAPHQL_BASE_API_URL}`))

export { baseAPI, graphqlAPI, nextAPI }
