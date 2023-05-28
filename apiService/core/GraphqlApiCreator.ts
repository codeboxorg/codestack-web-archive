import { GraphQLClient, RequestDocument } from 'graphql-request'

type RequestWithParams = {
  document: RequestDocument
  params: Record<string, unknown>
}

class GraphqlApiCreator {
  private baseUrl: string
  private graphqlClient: GraphQLClient

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.graphqlClient = new GraphQLClient(baseUrl)
  }

  async request({ document, params }: RequestWithParams): Promise<any> {
    return await this.graphqlClient.request(document, params)
  }

  setDefaultAuthorizationHeader(token: string) {
    token && this.graphqlClient.setHeader('Authorization', `Bearer ${token}`)
  }

  // deleteDefaultAuthorizationHeader() {
  //   const { Authorization, ...rest } = axios.defaults.headers.common
  //   axios.defaults.headers.common = rest
  // }
}

export { GraphqlApiCreator }
