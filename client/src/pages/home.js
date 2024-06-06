import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { useQuery } from '@apollo/client'
import { Layout, NewPostDialog, QueryResult } from '../components'
import { Post } from '../container'
import { colors, ToggleIcon } from '../styles'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { FEED_FOR_YOU } from '../utils'
import { UserContext } from '../context'

const Home = () => {
    // TODO: OPTIMIZE TO REMOVE THE REDUNDANCY NEWPOSTDIALOG BETWEEN COMPONENTS
    const [isCreatingNewPost, setIsCreatingNewPost] = useState(false)

    const handleOpenNewPostDialog = () => {
        setIsCreatingNewPost(true)
    }

    const handleCloseNewPostDialog = () => {
        setIsCreatingNewPost(false)
    }
    // TODO: Replace this mockCurrentUser with logged in user via Context
    const mockCurrentUser = useContext(UserContext)
    const { loading, error, data, refetch } = useQuery(FEED_FOR_YOU)

    return (
        <Layout grid>
            <QueryResult loading={loading} error={error} data={data}>
                {/* New Thread */}
                <NewThread>
                    <LinkContainer to={`/profile/${mockCurrentUser.username}`}>
                        <PostAvatarImage
                            src={mockCurrentUser?.profileImage?.url}
                        />
                    </LinkContainer>
                    <TextButton onClick={handleOpenNewPostDialog}>
                        Start a thread...
                    </TextButton>
                    <StyledButton
                        variant="outlined"
                        onClick={handleOpenNewPostDialog}
                    >
                        Post
                    </StyledButton>
                </NewThread>
                {/* List of Posts */}
                {data?.feedForYou?.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
                {/* Feed mode toggle button */}
                <FeedModeToggleButton
                    disableRipple
                    variant="outlined"
                    startIcon={<ToggleIcon />}
                >
                    Following
                </FeedModeToggleButton>
                <NewPostDialog
                    isCreateNewPost={isCreatingNewPost}
                    closeNewPostDialog={handleCloseNewPostDialog}
                    refetchPosts={refetch}
                />
            </QueryResult>
        </Layout>
    )
}

export default Home

const NewThread = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    borderBottom: 'none',
    borderRadius: '30px 30px 0 0',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '.5rem',
    padding: '1.5rem 2rem',
    width: '100%',
})

const PostAvatarImage = styled.img({
    borderRadius: '50%',
    objectFit: 'cover',
    width: 40,
    height: 40,
    ':hover': {
        cursor: 'pointer',
    },
})

const TextButton = styled(Button)({
    color: colors.grey.base,
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-start',
    textTransform: 'none',
    textAlign: 'right',
    ':hover': {
        cursor: 'text',
    },
})

const StyledButton = styled(Button)({
    '&.MuiButton-outlined': {
        borderColor: colors.silver.darker,
        borderRadius: '10px',
        color: colors.black.base,
        fontWeight: 'bold',
        textTransform: 'none',
    },
})

const FeedModeToggleButton = styled(Button)({
    position: 'fixed',
    bottom: '1rem',
    left: '1rem',
    '&.MuiButton-outlined': {
        borderColor: colors.silver.darker,
        borderRadius: '10px',
        color: colors.black.base,
        fontWeight: 'bold',
        textTransform: 'none',
    },
})

const LinkContainer = styled(Link)({
    textDecoration: 'none',
})
