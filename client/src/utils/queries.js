import { gql } from '@apollo/client'

// * ALL THE GRAPHQL QUERY REUSED THROUGHOUT THE CLIENT APP

// * Get all the users
export const GET_USER_BY_ID = gql`
    query UserById($userByIdId: Int) {
        userById(id: $userByIdId) {
            id
            username
            bio
            fullname
            joinedOn
            followerCount
            followingCount
            postCount
        }
    }
`

export const GET_USERS = gql`
    query Users {
        users {
            id
            username
            fullname
            bio
            followerCount
            followedBy {
                id
            }
            following {
                id
            }
            profileImage {
                url
            }
        }
    }
`

// * Get all the posts
export const FEED_FOR_YOU = gql`
    query FeedForYou {
        feedForYou {
            id
            body
            createdAt
            likeCount
            replyCount
            author {
                id
                username
                bio
                fullname
                profileImage {
                    id
                    url
                }
            }
            postImages {
                id
                url
                caption
            }
        }
    }
`
