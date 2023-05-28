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
}

export { GraphqlApiCreator }
