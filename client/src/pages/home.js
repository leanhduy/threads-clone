import React from 'react'
import { Layout, QueryResult } from '../components'
import { gql, useQuery } from '@apollo/client'

// ? QUERY
const FEED_FOR_YOU = gql`
    query FeedForYou {
        feedForYou {
            id
            body
            createdAt
            updatedAt
            likeCount
            repostCount
            replyCount
        }
    }
`

const Home = () => {
    const { loading, error, data } = useQuery(FEED_FOR_YOU)
    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={data}>
                {/* TODO: NEXT WE NEED TO BUILD THE POST COMPONENT TO DISPLAY EACH POST */}
                {/* {JSON.stringify(data)} */}
            </QueryResult>
        </Layout>
    )
}

export default Home
