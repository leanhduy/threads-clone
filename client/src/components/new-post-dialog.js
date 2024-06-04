import styled from '@emotion/styled'
import {
    Button,
    Dialog,
    TextField,
    Popover,
    ImageList,
    ImageListItem,
} from '@mui/material'
import React, { useState } from 'react'
import { colors } from '../styles'
import { mockUser } from '../mock'
import { Link } from 'react-router-dom'
import { ImageUploadButton } from '../components'

const PostScopes = {
    ANYONE: 'anyone',
    FOLLOWER: 'follower',
}

// TODO: REPLACE THIS WITH THE REAL DATA FROM SERVER WHEN IMPLEMENTING THE LOGIC
const images = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
]

const NewPostDialog = (props) => {
    const { onClose, open } = props
    const [scope, setScope] = useState(PostScopes.ANYONE)
    const [anchorEl, setAnchorEl] = useState(null)

    // * Handler functions
    const handleScopeChange = (e) => {
        setScope(e.target.value)
    }

    const handleCloseDialog = () => {
        onClose()
    }

    const handleOpenOption = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloseOption = () => {
        setAnchorEl(null)
    }

    const handleSelectOption = (e) => {
        setScope(e.target.textContent.toLowerCase())
        handleCloseOption()
    }

    const openOption = Boolean(anchorEl)

    return (
        <CreateDialog onClose={handleCloseDialog} open={open}>
            <DialogContainer>
                <Top>
                    <TopLeft>
                        <LinkDialogContainer
                            to={`/profile/${mockUser.username}`}
                        >
                            <PostAvatarImage
                                src={mockUser?.profileImage?.url}
                            />
                        </LinkDialogContainer>
                    </TopLeft>
                    <TopRight>
                        <Username>{mockUser.username}</Username>
                        {/* Post content */}
                        <PostContent>
                            <PostBody>
                                <PostInput
                                    multiline
                                    variant="standard"
                                    placeholder="Start a thread..."
                                />
                            </PostBody>
                            <PostImages>
                                <ImageList>
                                    {images.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </PostImages>
                        </PostContent>
                        {/* <ImageUploadSmIcon sx={{ display: 'block' }} /> */}
                        {/* Image upload button */}
                        <ImageUploadButton />
                    </TopRight>
                </Top>
                <Bottom>
                    {/* Popover select */}
                    <ScopeButton onClick={handleOpenOption}>
                        {`${scope[0].toUpperCase()}${scope.slice(1)} can view
                        your post`}
                    </ScopeButton>
                    <Popover
                        open={openOption}
                        anchorEl={anchorEl}
                        onClose={handleCloseOption}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <ScopeOptionContainer>
                            <ScopeOption onClick={handleSelectOption}>
                                Anyone
                            </ScopeOption>
                            <ScopeOption onClick={handleSelectOption}>
                                Follower
                            </ScopeOption>
                        </ScopeOptionContainer>
                    </Popover>
                    <PostButton disabled>Post</PostButton>
                </Bottom>
            </DialogContainer>
        </CreateDialog>
    )
}

export default NewPostDialog

const CreateDialog = styled(Dialog)({
    '& .MuiPaper-root': {
        padding: '2rem',
        width: '80%',
    },
})

const DialogContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '2rem',
})
const Top = styled.div({
    display: 'flex',
    columnGap: '1rem',
})
const Bottom = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
})
const TopLeft = styled.div({})
const TopRight = styled.div({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
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

const LinkDialogContainer = styled(Link)({
    textDecoration: 'none',
})
const Username = styled.h5({
    fontSize: '0.95rem',
})

const PostContent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
})

const PostBody = styled.div({})

const PostImages = styled.div({
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto', // Enable horizontal scrolling
    height: '248px',
    width: '100%',
    '& .MuiImageList-root': {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        width: '100%',
    },
    '& .MuiImageListItem-root': {
        flex: '0 0 auto', // Prevent shrinking and maintain item size
    },
})

const PostInput = styled(TextField)({
    width: '100%',
    '& .MuiInputBase-input': {
        fontSize: '.9rem',
    },
    '& .MuiInput-underline:before': {
        borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
        borderBottom: 'none',
    },
    '& .MuiInputBase-root': {
        '&:hover': {
            borderBottom: 'none',
        },
        '&.Mui-focused': {
            borderBottom: 'none',
            outline: 'none',
        },
    },
})

const ScopeOptionContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
    maxWidth: '50%',
})

const ScopeOption = styled(Button)({
    alignItems: 'center',
    display: 'flex',
    color: colors.black.base,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    padding: '1rem',
    textTransform: 'none',
    width: '100%',
})

const ScopeButton = styled(Button)({
    color: colors.grey.base,
    textTransform: 'none',
})

const PostButton = styled(Button)({
    border: `1px solid ${colors.silver.dark}`,
    borderRadius: '10px',
    color: colors.black.base,
    fontWeight: 'bold',
    textTransform: 'none',
})
