import { gql } from '@apollo/client'

// * ALL THE GRAPHQL QUERY REUSED THROUGHOUT THE CLIENT APP

// * Get a specific user by id
export const GET_USER_BY_ID = gql`
    query UserById($id: Int) {
        userById(id: $id) {
            id
            username
            bio
            fullname
            joinedOn
            followerCount
            followingCount
            postCount
            profileImage {
                id
                url
            }
            followedBy {
                id
                username
            }
            following {
                id
                username
            }
        }
    }
`

// * Get all users
export const GET_USERS = gql`
    query Users($skip: Int, $searchBy: String) {
        users(skip: $skip, searchBy: $searchBy) {
            cursorId
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
    }
`

// * Get all the posts
export const FEED_FOR_YOU = gql`
    query FeedForYou($skip: Int) {
        feedForYou(skip: $skip) {
            posts {
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
            cursorId
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
