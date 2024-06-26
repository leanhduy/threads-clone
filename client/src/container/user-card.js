import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { colors } from '../styles'
import { Button, Popover } from '@mui/material'
import styled from '@emotion/styled'
import abbreviate from 'number-abbreviate'
import UserCardPopover from './user-card-popover'
import { useMutation } from '@apollo/client'
import { FOLLOW_USER, UNFOLLOW_USER, userProfilePlaceHolder } from '../utils'
import { UserContext } from '../context'
const UserCard = ({ user, loggedInUser }) => {
    // * TOP-LEVEL STATES / VARIABLES
    const currentUser = useContext(UserContext)
    const [anchorEl, setAnchorEl] = useState(null)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const followerIds = loggedInUser.followedBy.map((f) => f.id)
    const followingIds = loggedInUser.following.map((f) => f.id)
    const navigate = useNavigate()

    const [followUser] = useMutation(FOLLOW_USER, {
        variables: {
            followerId: Number(currentUser.id),
            followingId: Number(user?.id),
        },
        onCompleted: async (data) => {
            // ? Reload the current page (Search page)
            navigate(0)
            if (data) {
                setIsFollowing(true)
            }
        },
        onError: (error) => {
            console.error(error)
        },
    })

    const [unfollowUser] = useMutation(UNFOLLOW_USER, {
        variables: {
            followerId: Number(currentUser.id),
            followingId: Number(user?.id),
        },
        onCompleted: async (data) => {
            // ? Reload the current page (Search page)
            navigate(0)
            if (data) {
                setIsFollowing(false)
            }
        },
        onError: (error) => {
            console.error(error)
        },
    })
    const [hoverTimeout, setHoverTimeout] = useState(null) // ? For tracking the hover duration on a title, before open the user-card

    // * Side-effects
    useEffect(() => {
        // ? Set up the following status of the current logged in user with other users
        if (user) {
            const followerIds = user.followedBy.map((u) => u.id)
            if (followerIds.includes(currentUser.id)) {
                setIsFollowing(true)
            }
        }
    }, [user, currentUser.id])

    useEffect(() => {}, [isFollowing])

    // * Event handlers
    const handleFollowing = async () => {
        try {
            if (followingIds.includes(user.id)) {
                await unfollowUser()
            } else {
                await followUser()
            }
        } catch (err) {
            console.error(err)
        }
    }

    const handleMouseEnter = (e) => {
        // ? Only trigger the popover if user have the mouse over the title for 300ms or more, prevent popover pops up randomly while user viewing the page
        const timeoutId = setTimeout(() => {
            handlePopoverOpen(e)
        }, 300)
        setHoverTimeout(timeoutId)
    }

    const handleMouseLeave = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout)
            setHoverTimeout(null)
        }
    }

    const handlePopoverOpen = (e) => {
        // ? param `e`: SyntheticEvent obj passed from the `handleMouseEnter` event handler
        setAnchorEl(e.nativeEvent.toElement)
        setIsPopoverOpen(true)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    // * Info of the user to be followed / unfollowed
    const { username, bio, followerCount, profileImage } = user
    return (
        <Content>
            <ContentSide>
                <LinkContainer to={`/profile/${username}`}>
                    <PostAvatarImage
                        src={profileImage?.url || userProfilePlaceHolder}
                        alt="user avatar"
                    />
                </LinkContainer>
            </ContentSide>
            <ContentMain>
                <ContentMainBody>
                    <LinkContainer to={`/profile/${username}`}>
                        <Title
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {username}
                        </Title>
                    </LinkContainer>
                    <Subtitle>{bio}</Subtitle>
                </ContentMainBody>
                <ContentMainFooter>
                    {`${new String(
                        abbreviate(followerCount, 2)
                    ).toUpperCase()} followers`}
                </ContentMainFooter>
            </ContentMain>
            <ContentSide>
                <FollowButton
                    className={
                        followingIds.includes(user.id) ? 'following' : ''
                    }
                    onClick={handleFollowing}
                >
                    {followingIds.includes(user.id)
                        ? 'Following'
                        : followerIds.includes(user.id)
                        ? 'Follow back'
                        : 'Follow'}
                </FollowButton>
            </ContentSide>
            {/* Popover component */}
            <StyledPopover
                id="card-popover"
                open={isPopoverOpen}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={() => {
                    handlePopoverClose()
                    setIsPopoverOpen(false)
                }}
                disableRestoreFocus
            >
                <UserCardPopover
                    user={user}
                    isFollowing={isFollowing}
                    followButtonText={
                        followingIds.includes(user.id)
                            ? 'Following'
                            : followerIds.includes(user.id)
                            ? 'Follow back'
                            : 'Follow'
                    }
                    setIsPopoverOpen={setIsPopoverOpen}
                    handleFollowing={handleFollowing}
                />
            </StyledPopover>
        </Content>
    )
}

export default UserCard

const StyledPopover = styled(Popover)({
    '& .MuiPaper-root': {
        borderRadius: '10px',
    },
})

const LinkContainer = styled(Link)({
    color: colors.black,
    cursor: 'pointer',
    textDecoration: 'none',
})

const Content = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    borderBottom: 'none',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    columnGap: '.5rem',
    padding: '1.5rem 2rem',
    width: '100%',
    minWidth: 'auto',
    overflowX: 'auto',
    '&:last-of-type': {
        borderBottom: `1px solid ${colors.grey.lighter}`,
        borderRadius: '0 0 30px 30px',
    },
})

const ContentSide = styled.div({
    marginRight: '.5rem',
})

const ContentMain = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    rowGap: '.5rem',
    wordBreak: 'break-word',
})

const ContentMainBody = styled.div({
    display: 'flex',
    flexDirection: 'column',
})

const ContentMainFooter = styled.div({
    fontSize: '.875rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
})

const PostAvatarImage = styled.img({
    borderRadius: '50%',
    objectFit: 'cover',
    width: 40,
    height: 40,
})

const Title = styled.h5({
    display: 'inline-block',
    ':hover': {
        textDecoration: 'underline',
    },
})

const Subtitle = styled.span({
    color: colors.grey.light,
    fontSize: '.875rem',
    display: 'block',
})

const FollowButton = styled(Button)({
    border: `1px solid ${colors.silver.dark}`,
    borderRadius: '15px',
    backgroundColor: colors.black.light,
    color: colors.white,
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '.75rem',
    textTransform: 'none',
    transition: 'transform 0.1s ease-in-out',
    width: '110px',
    '&.following': {
        backgroundColor: colors.white,
        color: colors.black.base,
    },
    ':hover': {
        backgroundColor: colors.black.light,
        color: colors.white,
    },
    ':active': {
        transform: 'scale(0.95)',
    },
})
