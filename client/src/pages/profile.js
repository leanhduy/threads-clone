import React from 'react'
import { useQuery } from '@apollo/client'
import { Layout, QueryResult, ProfileDetails } from '../components'
import { useParams } from 'react-router-dom'
import { GET_USER_BY_ID, GET_USER_BY_USERNAME } from '../utils'

const Profile = () => {
    const { username } = useParams()
    const {
        loading,
        error,
        data: user,
        refetch,
    } = useQuery(GET_USER_BY_USERNAME, {
        variables: {
            username,
        },
    })

    // * Get the current logged in user
    // TODO: When authentication features are implement (login), remove this code and replace with the authenticated user (e.g., via Context API)
    const { data, refetch: refetchLoggedInUser } = useQuery(GET_USER_BY_ID, {
        variables: {
            id: 1,
        },
    })

    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={user}>
                <ProfileDetails
                    user={user?.userByUsername}
                    loggedInUser={data?.userById}
                    refetchUser={refetch}
                    refetchLoggedInUser={refetchLoggedInUser}
                />
            </QueryResult>
        </Layout>
    )
}

export default Profile
