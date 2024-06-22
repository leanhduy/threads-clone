import styled from '@emotion/styled'
import React from 'react'
import { colors } from '../styles'
import {
    Typography,
    Button,
    Card,
    CardActions,
    CardContent,
} from '@mui/material'
import abbreviate from 'number-abbreviate'

const UserCardPopover = ({
    user,
    isFollowing,
    followButtonText,
    setIsPopoverOpen,
    handleFollowing,
}) => {
    const { username, fullname, bio, followerCount, profileImage } = user

    return (
        <UserCardContainer
            onMouseEnter={() => {
                setIsPopoverOpen(true)
            }}
            onMouseLeave={() => {
                setIsPopoverOpen(false)
            }}
        >
            <CardHeader>
                <CardHeaderLeft>
                    <CardUsername>{username}</CardUsername>
                    <CardFullname variant="h5" component="div">
                        {fullname}
                    </CardFullname>
                </CardHeaderLeft>
                <CardHeaderRight>
                    <PostAvatarImage
                        src={profileImage?.url}
                        alt="user avatar"
                    />
                </CardHeaderRight>
            </CardHeader>
            <StyledCardContent>
                <CardBio>{bio}</CardBio>
                <CardFollower>{`${new String(
                    abbreviate(followerCount, 2)
                ).toUpperCase()} followers`}</CardFollower>
            </StyledCardContent>
            <StyledCardAction>
                <FollowButton
                    fullWidth
                    className={isFollowing ? 'following' : 'not-following'}
                    onClick={handleFollowing}
                >
                    {followButtonText}
                </FollowButton>
            </StyledCardAction>
        </UserCardContainer>
    )
}

export default UserCardPopover

const UserCardContainer = styled(Card)({
    borderRadius: '15px',
    minWidth: 275,
    width: '350px',
    border: `1px solid ${colors.silver.base}`,
})

const StyledCardContent = styled(CardContent)({
    padding: '0 2rem',
})

const CardHeader = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '1.25rem 2rem 0',
})
const CardHeaderLeft = styled.div({
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
})
const CardHeaderRight = styled.div({
    alignSelf: 'flex-end',
})

const CardUsername = styled(Typography)({
    fontSize: '1.375rem',
    fontWeight: 600,
})

const CardFullname = styled(Typography)({
    fontSize: '.875rem',
})

const CardBio = styled(Typography)({
    margin: '.5rem 0',
})

const CardFollower = styled(Typography)({
    color: colors.grey.lighter,
    fontSize: '0.875rem',
})

const StyledCardAction = styled(CardActions)({
    padding: '0 2rem',
    margin: '1rem 0',
})

const FollowButton = styled(Button)({
    border: `1px solid ${colors.silver.dark}`,
    borderRadius: '10px',
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '.75rem',
    textTransform: 'none',
    transition: 'transform 0.1s ease-in-out',
    '&.following': {
        color: colors.black.light,
        backgroundColor: colors.white,
        ':hover': {
            color: colors.black.light,
            backgroundColor: colors.white,
        },
    },
    '&.not-following': {
        color: colors.white,
        backgroundColor: colors.black.base,
        ':hover': {
            color: colors.white,
            backgroundColor: colors.black.base,
        },
    },
    ':active': {
        transform: 'scale(0.95)',
    },
})

const PostAvatarImage = styled.img({
    borderRadius: '50%',
    objectFit: 'cover',
    width: 56,
    height: 56,
})
