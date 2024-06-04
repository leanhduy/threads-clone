import React, { useState } from 'react'
import { Button } from '@mui/material'
import { ImageUploadSmIcon } from '../styles'
import styled from '@emotion/styled'

const ImageUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setSelectedFile(file)
            // Handle the file for uploading, e.g., send to a server
            console.log('Selected file:', file)
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
