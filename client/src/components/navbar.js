import React from 'react'
import {
    colors,
    widths,
    DragHandleRoundedIcon,
    HomeRoundedIcon,
    SearchRoundedIcon,
    FavoriteBorderRoundedIcon,
    PersonOutlineRoundedIcon,
} from '../styles'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import logo from '../assets/threads.png'
import { IconButton } from '@mui/material'
import BorderColorRounded from '@mui/icons-material/BorderColorRounded'

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Navbar = ({ children }) => {
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
                    <IconButton aria-label="more">
                        <HomeRoundedIcon />
                    </IconButton>
                </HomeLink>
                <HomeLink to="/search">
                    <IconButton aria-label="more">
                        <SearchRoundedIcon />
                    </IconButton>
                </HomeLink>
                {/* THIS WILL OPEN A CREATE POST DIALOG */}
                <IconButton aria-label="more">
                    <BorderColorRounded />
                </IconButton>
                <HomeLink to="/activity">
                    <IconButton aria-label="more">
                        <FavoriteBorderRoundedIcon />
                    </IconButton>
                </HomeLink>
                <HomeLink to="/profile">
                    <IconButton aria-label="more">
                        <PersonOutlineRoundedIcon />
                    </IconButton>
                </HomeLink>
            </Container>
            <RightContainer>
                <HomeButtonContainer>
                    <HomeButton>
                        <IconButton aria-label="more">
                            <DragHandleRoundedIcon />
                        </IconButton>
                    </HomeButton>
                </HomeButtonContainer>
                {children}
            </RightContainer>
        </HeaderBar>
    )
}

export default Navbar

/** Navbar styled components */
const HeaderBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottom: `solid 1px ${colors.pink.light}`,
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
    padding: '5px 30px',
    minHeight: 80,
    backgroundColor: 'white',
})

const LeftContainer = styled.div({
    width: 40,
})

const RightContainer = styled.div({
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
    height: 32,
    width: 32,
    marginRight: 8,
})

const Title = styled.div({
    display: 'flex',
    flexDirection: 'column',
    h3: {
        lineHeight: '1em',
        marginBottom: 0,
    },
    div: {
        fontSize: '0.9em',
        lineHeight: '0.8em',
        paddingLeft: 2,
    },
})
