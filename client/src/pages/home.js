import React from 'react'
import { Layout, QueryResult } from '../components'
import { gql, useQuery } from '@apollo/client'
import Post from '../container/post'

// ? QUERY
const FEED_FOR_YOU = gql`
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

const Home = () => {
    const { loading, error, data } = useQuery(FEED_FOR_YOU)
    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={data}>
                {/* Might need to refactor this div into a styled element */}
                <div>
                    {data?.feedForYou?.map((post) => (
                        <Post post={post} />
                    ))}
                </div>
            </QueryResult>
        </Layout>
    )
}

export default Home
