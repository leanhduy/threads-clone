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
    // * Top-level states / variables
    // ? Indicates the number of posts to skip for the next query
    const [skip, setSkip] = useState(0)
    // ? Stores the list of posts fetched in the current query
    const [posts, setPosts] = useState([])
    // ? Ref to the element at the end of the post list for infinite scroll
    const ref = useRef()

    // TODO: Optimize by removing redundant NewPostDialog component usage
    const [isCreatingNewPost, setIsCreatingNewPost] = useState(false)

    // * Client-side GraphQL queries
    // ? Fetch the current logged-in user (Temporary implementation)
    const { data: loggedInUser } = useQuery(GET_USER_BY_ID, {
        variables: {
            id: 1,
        },
    })

    // ? Fetch the posts gradually
    const { data, refetch } = useQuery(FEED_FOR_YOU, {
        variables: { skip: skip },
    })

    // * HANDLERS
    const handleOpenNewPostDialog = () => {
        setIsCreatingNewPost(true)
    }

    const handleCloseNewPostDialog = () => {
        setIsCreatingNewPost(false)
    }

    // * SIDE-EFFECTS

    // ? Keep track of the fetched data of the GraphQL query and update the `posts` states
    useEffect(() => {
        if (data) {
            if (posts.length === 0) {
                setPosts(data.feedForYou.posts)
            } else {
                setPosts([...posts, ...data.feedForYou.posts])
            }
        }
    }, [data])

    // ? Leverage the Intersection Observer API for fetching data using infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting) {
                if (data) {
                    setSkip(posts.length)
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
            {loggedInUser && (
                <NewThread>
                    <LinkContainer
                        to={`/profile/${loggedInUser?.userById?.username}`}
                    >
                        <PostAvatarImage
                            src={loggedInUser?.userById?.profileImage?.url}
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
            )}
            {/* List of Posts */}
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            {/* UI Element to trigger the infinite scroll fetching*/}
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
