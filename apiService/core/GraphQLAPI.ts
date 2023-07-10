import { GraphQLClient, RequestDocument } from 'graphql-request'

type RequestWithParams = {
    document: RequestDocument
    params: Record<string, unknown>
}

class GraphQLAPI {
    private graphQLInstance: GraphQLClient

    constructor(graphQLInstance: GraphQLClient) {
        this.graphQLInstance = graphQLInstance
    }

    async request({ document, params }: RequestWithParams): Promise<any> {
        return this.graphQLInstance.request(document, params)
    }

    setDefaultAuthorizationHeader(token: string) {
        if (token) this.graphQLInstance.setHeader('Authorization', `Bearer ${token}`)
    }
}

export default GraphQLAPI
