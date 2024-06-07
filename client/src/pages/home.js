import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { useQuery } from '@apollo/client'
import { Layout, NewPostDialog } from '../components'
import { Post } from '../container'
import { colors, ToggleIcon } from '../styles'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { FEED_FOR_YOU, GET_USER_BY_ID } from '../utils'
import { UserContext } from '../context'

const Home = () => {
    const [skip, setSkip] = useState(0)
    const [posts, setPosts] = useState([])
    const ref = useRef()

    // TODO: OPTIMIZE TO REMOVE THE REDUNDANCY NEWPOSTDIALOG BETWEEN COMPONENTS
    const [isCreatingNewPost, setIsCreatingNewPost] = useState(false)
    // * Get the current logged in user
    // TODO: When authentication features are implement (login), remove this code and replace with the authenticated user (e.g., via Context API)
    useQuery(GET_USER_BY_ID, {
        variables: {
            id: 1,
        },
    })

    const handleOpenNewPostDialog = () => {
        setIsCreatingNewPost(true)
    }

    const handleCloseNewPostDialog = () => {
        setIsCreatingNewPost(false)
    }
    // TODO: Replace this mockCurrentUser with logged in user via Context
    const mockCurrentUser = useContext(UserContext)
    const { data, refetch } = useQuery(FEED_FOR_YOU, {
        variables: { skip: skip },
    })

    useEffect(() => {
        if (data) {
            if (posts.length === 0) {
                setPosts(data.feedForYou.posts)
            } else {
                setPosts([...posts, ...data.feedForYou.posts])
            }
        }
        console.log(data?.feedForYou)
    }, [data])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                if (data) {
                    setSkip(data.feedForYou.cursorId)
                }
            }
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [posts])

    return (
        <Layout grid>
            {/* New Thread */}
            <NewThread>
                <LinkContainer to={`/profile/${mockCurrentUser.username}`}>
                    <PostAvatarImage src={mockCurrentUser?.profileImage?.url} />
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
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            <p ref={ref}></p>
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
