import { NoEncryption, PermMediaOutlined } from '@mui/icons-material'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Typography,
    Avatar,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import styles from '../../styles/newdialog.module.css'

import { useEffect, useRef, useState } from 'react'
import { defaultAvatarURL } from '../utils/consts'
import { makeId } from '../utils/helpers'
import ThreadImage from './ThreadImage'

// styled-components
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

const NewPostDialog = ({ handleClose, openDialog }) => {
    // Global values
    const imageURL = null // TODO: Later use context or Redux / recoil to manage global user data
    const [post, setPost] = useState({
        id: makeId(),
        post_body: '',
        post_images: [],
        upload_timestamp: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60000
        ),
        likes_count: 0,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        author: '1a2b3c4d',
    })
    const [images, setImages] = useState([])
    const mediaRef = useRef()

    useEffect(() => {
        if (images.length > 0) {
            setPost({ ...post, post_images: [...images.map((i) => i.url)] })
        }
    }, [images])

    const handleChange = (e) => {
        setPost({ ...post, post_body: e.target.value })
    }

    const handleSubmit = async (event) => {
        // event.preventDefault()
        // Define the url
        const url = 'http://localhost:3001/posts'
        // Prepare the data (post)
        // Create fetch options
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        }
        // Send the POST request
        try {
            const res = await fetch(url, options)
            const data = await res.json()
            if (res.status === 201) {
                console.log('New post is created successfully!', data)
            } else if (res.status >= 400) {
                console.error('Error creating post:', await res.text()) // Get error message from response body
            } else {
                console.error('Unexpected response:', res.status)
            }
        } catch (error) {
            console.log(error)
        } finally {
            // Close the dialog
            handleClose()
        }
    }

    const removeImage = (imageId) => {
        setImages((prevImgs) => [
            ...prevImgs.filter((img) => img.id !== imageId),
        ])
    }

    // const handleCreate = async () => {}

    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
            fullWidth
        >
            <Box
                sx={{
                    fontWeight: 'bold',
                    margin: '1rem auto 1rem',
                    textAlign: 'center',
                }}
            >
                New thread
            </Box>
            <DialogContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <Avatar
                        className={styles.avatar}
                        src={imageURL || defaultAvatarURL}
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            margin: '0 auto',
                            flexDirection: 'column',
                            width: '90%',
                        }}
                    >
                        <Typography className={styles.username} variant="body1">
                            Username
                        </Typography>
                        <TextField
                            id="newPost"
                            variant="standard"
                            placeholder="Start a thread..."
                            multiline
                            InputProps={{
                                disableUnderline: true,
                            }}
                            onChange={handleChange}
                        />
                        <div className={styles.imagelist}>
                            {images &&
                                images.length > 0 &&
                                images.map((image) => (
                                    <ThreadImage
                                        key={image.id}
                                        imageProp={image}
                                        remove={removeImage}
                                    />
                                ))}
                        </div>
                        <Button
                            component="label"
                            disableRipple
                            disableElevation
                            variant="text"
                            startIcon={<PermMediaOutlined />}
                            sx={{
                                width: 32,
                                color: '#b0b3b8',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <VisuallyHiddenInput
                                accept="image/png, image/jpeg"
                                id="myImage"
                                onChange={() => {
                                    for (const img of mediaRef.current.files) {
                                        const url = URL.createObjectURL(img)
                                        setImages([
                                            ...images,
                                            {
                                                id: makeId(),
                                                url: url,
                                                alt: 'loren ipsum',
                                            },
                                        ])
                                    }
                                }}
                                ref={mediaRef}
                                type="file"
                            />
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 1.5rem',
                }}
            >
                {/* Action menu */}
                <Box sx={{ flexGrow: 1 }}></Box>
                <Button
                    disabled={post.post_body.length === 0}
                    disableElevation
                    variant="contained"
                    type="submit"
                    className={styles.btnRound}
                >
                    Post
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewPostDialog
