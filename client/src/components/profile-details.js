import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import { colors } from '../styles'
import { Button } from '@mui/material'
import abbreviate from 'number-abbreviate'
import { Post } from '../container'
import { mockUser } from '../mock'
import { NewPostContext } from '../context'

const filters = ['post', 'replies', 'reposts']
// TODO: Replace with the logged in user when Authenticate (Login/Logout) feature is implemented
const loggedInUser = mockUser
const followerIds = loggedInUser.followedBy.map((f) => f.id)
const followingIds = loggedInUser.following.map((f) => f.id)

const ProfileDetails = ({ user }) => {
    // * Filter state
    const [filter, setFilter] = useState('post')

    // * Access the setOpen from the NewPost context to open the creat new dialog, use by calling `openDialog(true)`
    const openNewPostDialog = useContext(NewPostContext)

    // * Event handlers
    const handleToggleFilter = (e) => {
        setFilter(e.currentTarget.textContent)
    }

    return (
        <Container>
            {/* Page Title = <username>*/}
            <PageTitle>{user?.username}</PageTitle>
            {/* User Info section */}
            <ProfileUserInfo>
                <ProfileUserInfoTop>
                    <ProfileUserInfoLeft>
                        <UserInfoFullname>{user?.fullname}</UserInfoFullname>
                        <UserInfoUsername>{user?.username}</UserInfoUsername>
                        <UserInfoBio>{user?.bio}</UserInfoBio>
                        <UserInfoFollowerCount>
                            {`${new String(
                                abbreviate(user?.followerCount, 2)
                            ).toUpperCase()} followers`}
                        </UserInfoFollowerCount>
                    </ProfileUserInfoLeft>
                    <ProfileUserInfoRight>
                        <AvatarImage
                            src={user.profileImage?.url}
                            alt="user avatar"
                        />
                    </ProfileUserInfoRight>
                </ProfileUserInfoTop>
                <ProfileUserInfoBottom>
                    {loggedInUser.id === user.id ? (
                        <EditButton>Edit Profile</EditButton>
                    ) : (
                        <>
                            <FollowButton
                                className={
                                    followingIds.includes(user.id)
                                        ? 'following'
                                        : ''
                                }
                            >
                                {followingIds.includes(user.id)
                                    ? 'Following'
                                    : followerIds.includes(user.id)
                                    ? 'Follow back'
                                    : 'Follow'}
                            </FollowButton>
                            <MentionButton>Mention</MentionButton>
                        </>
                    )}
                </ProfileUserInfoBottom>
            </ProfileUserInfo>
            {/* List of posts, replies, or reposts */}
            <Tabs>
                {filters.map((f) => (
                    <TabOption
                        key={f}
                        className={filter === f ? 'selected' : ''}
                        onClick={handleToggleFilter}
                        disableRipple
                    >
                        {f}
                    </TabOption>
                ))}
            </Tabs>
            {user?.posts?.length > 0 && (
                <>
                    <div className="PostList">
                        {user?.posts.map((p) => (
                            <Post key={p.id} post={p} />
                        ))}
                    </div>
                </>
            )}
            {user.posts.length === 0 && (
                <FallbackContainer>
                    {/* If this is not the current user, display No posts yet, otherwise display the 'Start Your First Thread' button */}
                    {loggedInUser.id === user.id ? (
                        <MentionButton onClick={openNewPostDialog}>
                            Start your first thread
                        </MentionButton>
                    ) : (
                        <FallbackDescription>
                            {filter === 'post'
                                ? 'No posts yet.'
                                : filter === 'replies'
                                ? 'No replies yet.'
                                : 'No reposts yet.'}
                        </FallbackDescription>
                    )}
                </FallbackContainer>
            )}
        </Container>
    )
}

export default ProfileDetails

//#region Styled-components
const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

const PageTitle = styled.div({
    fontWeight: 'bold',
    margin: '.5rem auto 1.5rem',
    textAlign: 'center',
    width: '100%',
})

const ProfileUserInfo = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    display: 'flex',
    flexDirection: 'column',
    borderBottom: 'none',
    borderRadius: '30px 30px 0 0',
    backgroundColor: colors.white,
    padding: '1.5rem 2rem',
    width: '100%',
})

const ProfileUserInfoTop = styled.div({
    display: 'flex',
    flexDirection: 'row',
})

const ProfileUserInfoBottom = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    columnGap: '.75rem',
})

const ProfileUserInfoLeft = styled.div({
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
})

const UserInfoFullname = styled.h3({
    paddingTop: '1rem',
})
const UserInfoUsername = styled.p({
    padding: 0,
    margin: '0 0 2.5rem 0',
})
const UserInfoBio = styled.p({
    margin: '0 0 2rem 0',
})
const UserInfoFollowerCount = styled.p({
    margin: '0 0 2rem 0',
    color: colors.grey.light,
})

const ProfileUserInfoRight = styled.div({
    display: 'flex',
    flexDirection: 'column',
})

const AvatarImage = styled.img({
    borderRadius: '50%',
    objectFit: 'cover',
    width: 92,
    height: 92,
})

const FallbackContainer = styled.div({
    alignContent: 'center',
    border: `1px solid ${colors.grey.lighter}`,
    borderTop: 'none',
    borderRadius: '0 0 30px 30px',
    backgroundColor: colors.white,
    flexGrow: 1,
    padding: '1.5rem 2rem',
    textAlign: 'center',
    width: '100%',
})

const FallbackTitle = styled.h3({
    fontSize: '1.25rem',
})

const FallbackDescription = styled.p({
    color: colors.grey.light,
})

const FollowButton = styled(Button)({
    border: `1px solid ${colors.silver.dark}`,
    borderRadius: '15px',
    backgroundColor: colors.black.light,
    color: colors.white,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '.75rem',
    textTransform: 'none',
    transition: 'transform 0.1s ease-in-out',
    width: '50%',
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

const MentionButton = styled(Button)({
    border: `1px solid ${colors.silver.dark}`,
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '.75rem',
    textTransform: 'none',
    transition: 'transform 0.1s ease-in-out',
    width: '50%',
    color: colors.black.light,
    backgroundColor: colors.white,
    ':hover': {
        color: colors.black.light,
        backgroundColor: colors.white,
    },
    ':active': {
        transform: 'scale(0.95)',
    },
})

const EditButton = styled(Button)({
    backgroundColor: colors.white,
    border: `1px solid ${colors.silver.dark}`,
    borderRadius: '15px',
    color: colors.black.light,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '.75rem',
    textTransform: 'none',
    transition: 'transform 0.1s ease-in-out',
    width: '100%',
    ':hover': {
        color: colors.black.light,
        backgroundColor: colors.white,
    },
    ':active': {
        transform: 'scale(0.95)',
    },
})

const PostContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 2rem',
})

const Tabs = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    borderTop: 'none',
    borderBottom: 'none',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    listStyle: 'none',
    textDecoration: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
})

const TabOption = styled(Button)({
    color: colors.grey.light,
    fontWeight: 'bold',
    flex: 1,
    padding: '1rem 0',
    textAlign: 'center',
    '&.MuiButtonBase-root': {
        borderRadius: 0,
    },
    '&.selected': {
        color: colors.black.base,
        borderBottom: `1px solid ${colors.black.base}`,
    },
})
//#endregion
