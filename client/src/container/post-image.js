import React from 'react'
import { Box } from '@mui/material'
import { useState } from 'react'
import { UpdateImageAltDialog } from '../components'
import { colors } from '../styles'
import styled from '@emotion/styled'

const PostImage = ({ imageProp, remove, update }) => {
    const [isUpdateAlt, setIsUpdateAlt] = useState(false)

    return (
        <>
            <StyledBox>
                <StyledRemoveButton
                    onClick={() => {
                        remove(imageProp.id)
                    }}
                >
                    X
                </StyledRemoveButton>
                <figure>
                    <StyledImg
                        alt={imageProp.alt}
                        src={imageProp.url}
                        loading="lazy"
                    />
                    <StyledImgCaption>{imageProp.caption}</StyledImgCaption>
                </figure>
                <StyledUpdateAltButton
                    onClick={() => {
                        setIsUpdateAlt(true)
                    }}
                >
                    Alt
                </StyledUpdateAltButton>
            </StyledBox>
            {/* Update Image alt text dialog */}
            <UpdateImageAltDialog
                isUpdateAlt={isUpdateAlt}
                setIsUpdateAlt={setIsUpdateAlt}
                image={imageProp}
                update={update}
            />
        </>
    )
}

export default PostImage

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    color: colors.white,
    textAlign: 'center',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
})

const StyledRemoveButton = styled(Box)({
    alignContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    color: colors.white,
    fontWeight: 500,
    height: '2rem',
    position: 'relative',
    width: '2rem',
    alignSelf: 'flex-end',
    borderRadius: '50%',
    right: '1.5rem',
    top: '2.5rem',
    '&:hover': {
        cursor: 'pointer',
    },
})

const StyledImg = styled.img({
    borderRadius: '10px',
    maxHeight: '15rem',
})

const StyledImgCaption = styled.figcaption({
    textAlign: 'left',
    color: colors.grey.base,
})

const StyledUpdateAltButton = styled(Box)({
    alignContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    color: colors.white,
    fontWeight: 500,
    height: '2rem',
    position: 'relative',
    alignSelf: 'flex-start',
    borderRadius: '10px',
    bottom: '4.75rem',
    left: '2.75rem',
    width: '3rem',
    '&:hover': {
        cursor: 'pointer',
    },
})
