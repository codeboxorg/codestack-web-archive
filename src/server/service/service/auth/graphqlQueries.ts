import { gql } from 'graphql-request'

export const MY_INFO = gql`
    query {
        getMe {
            username
            nickname
            email
            profileImage
        }
    }
`
