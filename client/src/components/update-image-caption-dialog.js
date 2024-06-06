import React from 'react'
import styled from '@emotion/styled'
import {
    Dialog,
    DialogActions,
    DialogContent,
    Button,
    TextField,
    DialogTitle,
} from '@mui/material'
import { colors } from '../styles'

import { useEffect, useRef } from 'react'

const UpdateImageAltDialog = ({
    image,
    isUpdateAlt,
    setIsUpdateAlt,
    update,
}) => {
    const ref = useRef()
    useEffect(() => {}, [])

    const handleChange = (newVal) => {
        ref.current.value = newVal
    }

    const handleUpdateAlt = () => {
        const updatedImage = { ...image, caption: ref.current.value.trim() }
        update(updatedImage)
        setIsUpdateAlt(false)
    }

    return (
        <Dialog
            open={isUpdateAlt}
            onClose={() => {
                setIsUpdateAlt(false)
            }}
            PaperProps={{
                sx: {
                    height: '25rem',
                    width: '100%',
                },
            }}
        >
            <StyledDialogTitle>Add alt text</StyledDialogTitle>
            <DialogContent>
                <StyledImg src={image.url} alt={image.alt} />
                <StyledDivider />
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
                <StyledCancelButton
                    onClick={() => {
                        setIsUpdateAlt(false)
                    }}
                >
                    Cancel
                </StyledCancelButton>
                <StyledDoneButton onClick={handleUpdateAlt}>
                    Done
                </StyledDoneButton>
            </DialogActions>
        </Dialog>
    )
}

export default UpdateImageAltDialog

const StyledDialogTitle = styled(DialogTitle)({
    fontSize: '1.15rem',
    fontWeight: 700,
    textAlign: 'center',
})

const StyledImg = styled.img({
    display: 'block',
    maxHeight: '150px',
    margin: '1rem auto',
})

const StyledDivider = styled.hr({
    border: 'none',
    height: '1px',
    backgroundColor: colors.silver.base,
})

const StyledCancelButton = styled(Button)({
    alignItems: 'center',
    color: colors.black.base,
    fontWeight: 700,
    left: '1.5rem',
    position: 'absolute',
    textTransform: 'capitalize',
    top: '0.75rem',
})

const StyledDoneButton = styled(Button)({
    alignItems: 'center',
    border: `1px solid ${colors.black.base}`,
    borderRadius: '10px',
    color: colors.black.base,
    fontWeight: 700,
    padding: '0.25rem 1rem',
    textTransform: 'capitalize',
    margin: '0 1.5rem 1rem 0',
})
