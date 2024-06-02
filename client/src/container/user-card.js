import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../styles'
import { Button, Popover, Typography } from '@mui/material'
import styled from '@emotion/styled'
import abbreviate from 'number-abbreviate'
import UserCardPopover from './user-card-popover'

// Mock data

const UserCard = ({ user }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const handlePopoverOpen = (e) => {
        setAnchorEl(e.currentTarget)
        setIsPopoverOpen(true)
    }
    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const { username, bio, followerCount, profileImage } = user
    return (
        <Content>
            <ContentSide>
                <PostAvatarImage src={profileImage?.url} alt="user avatar" />
            </ContentSide>
            <ContentMain>
                <ContentMainBody>
                    <LinkContainer to={'/profile'}>
                        <Title onMouseEnter={handlePopoverOpen}>
                            {username}
                        </Title>
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
                    setIsPopoverOpen(false)
                }}
                disableRestoreFocus
            >
                <UserCardPopover
                    user={null}
                    setIsPopoverOpen={setIsPopoverOpen}
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
    width: '110px',
    '&.MuiButton-outlined': {
        borderColor: colors.silver.darker,
        borderRadius: '10px',
        color: colors.black.base,
        fontWeight: 'bold',
        textTransform: 'none',
    },
})
