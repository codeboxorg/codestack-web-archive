import { gql } from 'graphql-request'

export const ME = gql`
    query {
        getMe {
            nickname
            profileImage
            username
            email
        }
    }
`
