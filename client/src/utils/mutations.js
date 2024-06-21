import { gql } from '@apollo/client'
// * ALL THE GRAPHQL QUERY REUSED THROUGHOUT THE CLIENT APP

// * Follow a user
export const FOLLOW_USER = gql`
    mutation Follow($followerId: Int!, $followingId: Int!) {
        followUser(followerId: $followerId, followingId: $followingId) {
            code
            success
            message
            following {
                id
                username
                followingCount
                following {
                    id
                    username
                    followerCount
                }
            }
        }
    }
`

// * Unfollow a user
export const UNFOLLOW_USER = gql`
    mutation Unfollow($followerId: Int!, $followingId: Int!) {
        unfollowUser(followerId: $followerId, followingId: $followingId) {
            code
            success
            message
            following {
                id
                username
                followingCount
                following {
                    id
                    username
                    followerCount
                }
            }
        }
    }
`

// * ADD POST
export const ADD_POST = gql`
    mutation AddPost($post: PostCreateInput) {
        addpost(post: $post) {
            code
            success
            message
            post {
                id
                body
                createdAt
                updatedAt
                likeCount
                repostCount
                replyCount
            }
        }
    }
`

export const SIGN_UP = gql`
    mutation SignUp($username: String!, $password: String!) {
        signup(username: $username, password: $password) {
            code
            success
            message
            payload {
                user {
                    id
                }
                token
            }
        }
    }
`
