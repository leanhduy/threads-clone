import { gql } from '@apollo/client'

// * ALL THE GRAPHQL QUERY REUSED THROUGHOUT THE CLIENT APP

// * Get a specific user by id
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
// * Get all users
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

// * Get a specific user by username
export const GET_USER_BY_USERNAME = gql`
    query UserByUsername($username: String) {
        userByUsername(username: $username) {
            id
            username
            bio
            fullname
            joinedOn
            followerCount
            followingCount
            postCount
            posts {
                id
                body
                createdAt
                updatedAt
                likeCount
                repostCount
                replyCount
                postImages {
                    id
                    url
                    caption
                }
                author {
                    profileImage {
                        url
                    }
                    username
                }
            }
            profileImage {
                id
                url
            }
        }
    }
`