import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
} from '@mui/material'

import styles from '../../styles/newdialog.module.css'
import { useEffect, useRef } from 'react'

const UpdateImageAltDialog = ({
    image,
    setImage,
    isUpdateAlt,
    setIsUpdateAlt,
}) => {
    const ref = useRef()

    useEffect(() => {}, [])

    const handleChange = (newVal) => {
        ref.current.value = newVal
    }

    const handleClose = () => {
        // Update the image alt
        setImage({ ...image, alt: ref.current.value })

        // Update the
        setIsUpdateAlt(false)
    }

    return (
        <Dialog
            open={isUpdateAlt}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    height: '25rem',
                    width: '100%',
                },
            }}
        >
            <DialogTitle className={styles['altUpdateForm__title']}>
                Add alt text
            </DialogTitle>
            <DialogContent>
                <img
                    src={image.url}
                    alt={image.alt}
                    className={styles['altUpdateForm__thumbnailImg']}
                />
                <hr className={styles['divider']} />
                <TextField
                    id="imageAlt"
                    variant="standard"
                    placeholder={
                        image.alt ||
                        'Describe this for people with visual impairments...'
                    }
                    InputProps={{
                        disableUnderline: true,
                    }}
                    fullWidth
                    inputRef={ref}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    className={styles['altUpdateForm__cancelButton']}
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    className={styles['altUpdateForm__DoneButton']}
                    onClick={handleClose}
                >
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateImageAltDialog
