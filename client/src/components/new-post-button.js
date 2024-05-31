import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { AddIcon } from '../styles'
import React from 'react'
import { colors } from '../styles'

const NewPostButton = () => {
    return (
        <StyledButton>
            <AddIcon />
        </StyledButton>
    )
}

export default NewPostButton

const StyledButton = styled(Button)({
    backgroundColor: colors.white,
    border: `1px solid ${colors.silver.darker}`,
    borderRadius: '10px',
    bottom: '1rem',
    color: colors.black.base,
    right: '1rem',
    position: 'fixed',
    width: '75px',
    height: '75px',
    '& .MuiSvgIcon-root': {
        fontSize: '2.25rem',
    },
    transition: 'all 0.25s ease',
    ':hover': {
        transform: 'scale(1.1)',
        backgroundColor: colors.white,
    },
})
