import styled from '@emotion/styled'
import { Button, Dialog, TextField, Popover } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { colors } from '../styles'
import { mockUser } from '../mock'
import { Link } from 'react-router-dom'
import { ImageUploadButton, Spinner } from '../components'
import { PostImage } from '../container'
import { ToastContainer } from 'react-toastify'
import { createPostToastr } from '../utils'

const PostScopes = {
    ANYONE: 'anyone',
    FOLLOWER: 'follower',
}

const NewPostDialog = ({ isCreateNewPost, closeNewPostDialog }) => {
    const [scope, setScope] = useState(PostScopes.ANYONE)
    const [anchorEl, setAnchorEl] = useState(null)
    const [isPostContentAvail, setIsPostContentAvail] = useState(false) // Check if post content is available
    const [postText, setPostText] = useState('')
    const [postImages, setPostImages] = useState([])

    // * Handler functions

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

    const addImage = (src) => {
        setPostImages((postImages) => [...postImages, { ...src }])
    }

    const updateImage = (img) => {
        const updatedImages = postImages.map((i) => {
            if (i.id === img.id) {
                return img
            }
            return i
        })
        setPostImages(updatedImages)
    }

    const removeImage = (id) => {
        setPostImages((imgs) => [...imgs.filter((img) => img.id !== id)])
    }

    const handleCreatePost = () => {
        // TODO: REMOVE AFTER TESTING
        createPostToastr(Spinner)
    }

    // * #region Side-effects
    // ? Keep track of the postText and postImages to enable/disable the Post button
    useEffect(() => {
        if (postText.trim() !== '' || postImages.length > 0) {
            setIsPostContentAvail(true)
        } else {
            setIsPostContentAvail(false)
        }
    }, [postText, postImages])

    // * Others
    const openOption = Boolean(anchorEl)

    return (
        <CreateDialog onClose={closeNewPostDialog} open={isCreateNewPost}>
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
                                    onChange={(e) => {
                                        setPostText(e.target.value)
                                    }}
                                />
                            </PostBody>
                            {postImages.length > 0 && (
                                <PostImages>
                                    {postImages.map((i) => (
                                        <ImageContainer key={i.id}>
                                            <PostImage
                                                imageProp={i}
                                                remove={removeImage}
                                                update={updateImage}
                                            />
                                        </ImageContainer>
                                    ))}
                                </PostImages>
                            )}
                        </PostContent>
                        {/* Image upload button */}
                        <ImageUploadButton addImage={addImage} />
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
                    <PostButton
                        disabled={!isPostContentAvail}
                        onClick={handleCreatePost}
                    >
                        Post
                    </PostButton>
                </Bottom>
            </DialogContainer>
            <ToastContainer />
        </CreateDialog>
    )
}

export default NewPostDialog

// #region Styled-components
const CreateDialog = styled(Dialog)({
    '& .MuiPaper-root': {
        padding: '2rem',
        width: '800%',
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
    width: '100%',
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
    overflow: 'auto',
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
})

const PostBody = styled.div({})

const PostImages = styled.div({
    display: 'flex',
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
})

const ImageContainer = styled.div({
    display: 'inline-block',
    color: colors.white,
    textAlign: 'center',
    padding: '14px',
    textDecoration: 'none',
})

const StyledImg = styled.img({
    height: '278px',
    width: 'auto',
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

// #endregion Styled-components
