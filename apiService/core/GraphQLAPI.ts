import { GraphQLClient, RequestDocument } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types'

type RequestWithParams = {
    document: RequestDocument
    params?: Record<string, unknown>
    requestHeaders?: GraphQLClientRequestHeaders
}

class GraphQLAPI {
    private graphQLInstance: GraphQLClient

    constructor(graphQLInstance: GraphQLClient) {
        this.graphQLInstance = graphQLInstance
    }

    async request({ document, params, requestHeaders }: RequestWithParams): Promise<any> {
        return this.graphQLInstance.request(document, params, requestHeaders)
    }

    setDefaultAuthorizationHeader(token: string) {
        if (token) this.graphQLInstance.setHeader('Authorization', `Bearer ${token}`)
    }
}

export default GraphQLAPI
