import React from 'react'
import { useQuery } from '@apollo/client'
import {
    NewPostButton,
    Layout,
    QueryResult,
    ProfileDetails,
} from '../components'
import { useParams } from 'react-router-dom'
import { mockUser } from '../mock'
import { GET_USER_BY_USERNAME } from '../utils'

const Profile = () => {
    const { username } = useParams()
    const {
        loading,
        error,
        data: user,
    } = useQuery(GET_USER_BY_USERNAME, {
        variables: {
            username,
        },
    })

    return (
        <Layout grid>
            {/* TODO: Update loading, error, data when implementing the business logic */}
            <QueryResult loading={loading} error={error} data={user}>
                <ProfileDetails user={user?.userByUsername} />
            </QueryResult>
            <NewPostButton />
        </Layout>
    )
}

export default Profile
