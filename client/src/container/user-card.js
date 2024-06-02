import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../styles'
import { Button } from '@mui/material'
import abbreviate from 'number-abbreviate'

// Mock data
const mockUser = {
    id: '1',
    username: 'netninja',
    fullname: 'Shaun Pelling',
    bio: 'Coding tutorials & courses | #netninja | youtube.com/thenetninja',
    followerCount: 1,
    profileImage: {
        url: 'https://avatars.githubusercontent.com/u/9838872?v=4',
    },
}

const UserCard = ({ user }) => {
    const { id, username, fullname, bio, followerCount, profileImage } = user
    return (
        <Content>
            <ContentSide>
                <PostAvatarImage src={profileImage?.url} alt="user avatar" />
            </ContentSide>
            <ContentMain>
                <ContentMainBody>
                    <LinkContainer to={'/profile'}>
                        <Title>{username}</Title>
                        <Subtitle>{bio}</Subtitle>
                    </LinkContainer>
                </ContentMainBody>
                <ContentMainFooter>
                    {`${new String(
                        abbreviate(followerCount, 2)
                    ).toUpperCase()} followers`}
                </ContentMainFooter>
            </ContentMain>
            <ContentSide>
                <FollowButton variant="outlined">Follow</FollowButton>
            </ContentSide>
        </Content>
    )
}

export default UserCard

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

const ContentMainHeader = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '.5rem',
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
    filter: 'grayscale(60%)',
})

const PostImage = styled.img({
    margin: '1rem 0',
    maxWidth: '70%',
    height: 'auto',
})

const Title = styled.h5({})

const Subtitle = styled.span({
    color: colors.grey.light,
    fontSize: '.875rem',
})

const PostAction = styled(Button)({
    color: colors.black.base,
    whiteSpace: 'nowrap',
    height: '2rem',
})

const ImageContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'flex-start',
    width: '100%',
})

const FollowButton = styled(Button)({
    width: '110px',
    '&.MuiButton-outlined': {
        borderColor: colors.silver.darker,
        borderRadius: '10px',
        color: colors.black.base,
        fontWeight: 'bold',
        textTransform: 'none',
    },
})
