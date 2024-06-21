import React, { useContext } from 'react'
import {
    colors,
    widths,
    HomeRoundedIcon,
    SearchRoundedIcon,
    FavoriteBorderRoundedIcon,
    PersonOutlineRoundedIcon,
    BorderColorRoundedIcon,
    LogoutIcon,
} from '../styles'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import logo from '../assets/threads.png'
import { CircularProgress, IconButton } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_USER_BY_ID, userProfilePlaceHolder } from '../utils'
import { UserContext } from '../context'

const Navbar = ({ children, openNewPostDialog }) => {
    // * The fields and methods to handle the logged in user, from the UserContext
    const { userId, logout } = useContext(UserContext)
    const {
        loading,
        error,
        data: user,
    } = useQuery(GET_USER_BY_ID, {
        variables: {
            id: parseInt(userId),
        },
    })

    if (loading) {
        return <CircularProgress />
    }

    return (
        <HeaderBar>
            <LeftContainer>
                <HomeButtonContainer>
                    <HomeLink to="/">
                        <HomeButton>
                            <LogoContainer>
                                <Logo src={logo} />
                            </LogoContainer>
                        </HomeButton>
                    </HomeLink>
                </HomeButtonContainer>
                {children}
            </LeftContainer>
            <Container>
                <HomeLink to="/">
                    <IconButton aria-label="home">
                        <HomeRoundedIcon />
                    </IconButton>
                </HomeLink>
                <HomeLink to="/search">
                    <IconButton aria-label="search">
                        <SearchRoundedIcon />
                    </IconButton>
                </HomeLink>
                {/* THIS WILL OPEN A CREATE POST DIALOG */}
                <IconButton aria-label="edit" onClick={openNewPostDialog}>
                    <BorderColorRoundedIcon />
                </IconButton>
                <HomeLink to="/activity">
                    <IconButton aria-label="activity">
                        <FavoriteBorderRoundedIcon />
                    </IconButton>
                </HomeLink>
                {/* If user is not logged in, redirect to login page. Otherwise, redirect to profile page */}
                {user ? (
                    <LinkContainer to={`/profile/${user?.userById?.username}`}>
                        <PostAvatarImage
                            src={
                                user?.userById?.profileImage?.url ||
                                userProfilePlaceHolder
                            }
                        />
                    </LinkContainer>
                ) : (
                    <HomeLink to="/signin">
                        <IconButton aria-label="profile">
                            <PersonOutlineRoundedIcon />
                        </IconButton>
                    </HomeLink>
                )}
            </Container>
            <RightContainer>
                {/* Display log out icon if user is logged in. Otherwise, display nothing */}
                {user && (
                    <IconButton aria-label="signout" onClick={logout}>
                        <LogoutIcon />
                    </IconButton>
                )}
            </RightContainer>
        </HeaderBar>
    )
}

export default Navbar

//#region Styled-Components
const HeaderBar = styled.div({
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '5px 30px',
    minHeight: 80,
    width: '100%',
})

const LeftContainer = styled.div({
    width: 40,
})

const Container = styled.div({
    width: `${widths.regularPageWidth}px`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: '1.5rem',
})

const HomeLink = styled(Link)({
    textDecoration: 'none',
})

const HomeButtonContainer = styled.div({
    display: 'flex',
    flex: 1,
})

const HomeButton = styled.div({
    display: 'flex',
    flexDirection: 'row',
    color: colors.accent,
    alignItems: 'center',
    ':hover': {
        color: colors.pink.dark,
    },
})

const LogoContainer = styled.div({ display: 'flex', alignSelf: 'center' })

const Logo = styled.img({
    height: 40,
    width: 40,
    marginRight: 8,
})

const LinkContainer = styled(Link)({
    alignSelf: 'center',
    textDecoration: 'none',
    display: 'flex',
})

const PostAvatarImage = styled.img({
    borderRadius: '50%',
    objectFit: 'cover',
    width: 42,
    height: 42,
    ':hover': {
        cursor: 'pointer',
    },
    margin: 0,
})

const RightContainer = styled.div({
    width: 40,
})

//#endregion Styled-Components
