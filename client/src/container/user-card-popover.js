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

// Mock data
const mockUser = {
    id: '1',
    username: 'netninja',
    fullname: 'Shaun Pelling',
    bio: 'Coding tutorials & courses | #netninja | youtube.com/thenetninja',
    followerCount: 12500,
    profileImage: {
        url: 'https://avatars.githubusercontent.com/u/9838872?v=4',
    },
}

const UserCardPopover = ({ user }) => {
    // const { id, username, fullname, bio, followerCount, profileImage } = user
    return (
        <UserCardContainer>
            <CardHeader>
                <CardHeaderLeft>
                    <CardUsername>{mockUser.username}</CardUsername>
                    <CardFullname variant="h5" component="div">
                        {mockUser.fullname}
                    </CardFullname>
                </CardHeaderLeft>
                <CardHeaderRight>
                    <PostAvatarImage
                        src={mockUser.profileImage?.url}
                        alt="user avatar"
                    />
                </CardHeaderRight>
            </CardHeader>
            <StyledCardContent>
                {/* <CardUsername>{mockUser.username}</CardUsername>
                <CardFullname variant="h5" component="div">
                    {mockUser.fullname}
                </CardFullname> */}
                <CardBio>{mockUser.bio}</CardBio>
                <CardFollower>{`${new String(
                    abbreviate(mockUser.followerCount, 2)
                ).toUpperCase()} followers`}</CardFollower>
            </StyledCardContent>
            <StyledCardAction>
                <FollowButton fullWidth>Follow</FollowButton>
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
    fontWeight: 'bold',
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
    backgroundColor: colors.black.base,
    borderRadius: '10px',
    color: colors.white,
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '.75rem',
    textTransform: 'none',
})

const PostAvatarImage = styled.img({
    borderRadius: '50%',
    objectFit: 'cover',
    width: 56,
    height: 56,
    filter: 'grayscale(60%)',
})
