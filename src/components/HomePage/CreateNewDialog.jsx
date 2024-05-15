import { PermMediaOutlined } from '@mui/icons-material'
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

const CreateNewDialog = ({ handleOpen, handleClose, openDialog }) => {
    const imageURL = null // TODO: REPLACE WITH USER DATA
    const [images, setImages] = useState([])
    const mediaRef = useRef()

    useEffect(() => {
        console.log(images)
    }, [images])

    const handleSubmit = (event) => {
        event.preventDefault()
        handleClose()
    }

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

    const removeImage = (imageId) => {
        setImages((prevImgs) => [
            ...prevImgs.filter((img) => img.id !== imageId),
        ])
    }

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
                            id="input-with-sx"
                            label=""
                            variant="standard"
                            placeholder="Start a thread..."
                            multiline
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <div className={styles.imagelist}>
                            {images.length > 0 &&
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
                                        setImages((prev) => [
                                            ...prev,
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
                <Button variant="contained" type="button">
                    Post
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateNewDialog
