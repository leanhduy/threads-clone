import React, { useState } from 'react'
import { Button } from '@mui/material'
import { ImageUploadSmIcon } from '../styles'
import styled from '@emotion/styled'
import { generateUniqueID } from '../utils'

const ImageUploadButton = ({ addImage }) => {
    // * Event handlers

    const handleFileChange = (event) => {
        const file = event.target.files[0]

        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            addImage({
                id: generateUniqueID(),
                url: URL.createObjectURL(file),
                caption: 'No caption',
            })

            /**
             * TODO
             * * 1. UPLOAD TO THE CLOUDINARY SERVER USING HTTP POST REQUEST (AXIOS)
             * * 2. AFTER GETTING THE URL OF THE IMAGE, WRITE INTO THE POSTIMAGE TABLE
             */
        } else {
            console.error('Please select a valid image file (JPEG or PNG)')
        }
    }

    return (
        <div>
            <StyledButton component="label" startIcon={<ImageUploadSmIcon />}>
                <HiddenInput
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={handleFileChange}
                />
            </StyledButton>
        </div>
    )
}

export default ImageUploadButton

const HiddenInput = styled.input({
    display: 'none',
})

const StyledButton = styled(Button)({})
