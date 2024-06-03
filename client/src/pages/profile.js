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

const Profile = () => {
    const { username } = useParams()

    // TODO: Use real user data when implementing the business logic

    return (
        <Layout grid>
            {/* TODO: Update loading, error, data when implementing the business logic */}
            <QueryResult loading={false} error={null} data={mockUser}>
                <ProfileDetails user={mockUser} />
            </QueryResult>
            <NewPostButton />
        </Layout>
    )
}

export default Profile
