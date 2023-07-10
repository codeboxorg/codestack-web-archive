import { GraphQLClient } from 'graphql-request'

const createGraphQLInstance = (baseURL: string) => new GraphQLClient(baseURL)

export default createGraphQLInstance
