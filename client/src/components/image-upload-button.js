import React, { useState } from 'react'
import { Button } from '@mui/material'
import { ImageUploadSmIcon } from '../styles'
import styled from '@emotion/styled'
import { generateUniqueID } from '../utils'

const ImageUploadButton = ({ addImage }) => {
    // * Event handlers

    const handleFileChange = (event) => {
        const file = event.target.files[0]

        if (
            file &&
            (file.type === 'image/jpeg' ||
                file.type === 'image/png' ||
                file.type === 'image/gif')
        ) {
            addImage({
                id: generateUniqueID(),
                url: URL.createObjectURL(file),
                caption: 'No caption',
                file: file,
            })
        } else {
            console.error('Please select a valid image file (JPEG or PNG)')
        }
    }

    return (
        <div>
            <StyledButton component="label" startIcon={<ImageUploadSmIcon />}>
                <HiddenInput
                    type="file"
                    accept="image/jpeg, image/png, image/gif"
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
