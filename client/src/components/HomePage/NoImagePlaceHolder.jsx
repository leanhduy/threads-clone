import React from 'react'
import { noImagePlaceholder } from '../utils/consts'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'
import Image from 'mui-image'

const NoImagePlaceHolder = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Image
            key={noImagePlaceholder}
            showLoading
            src={noImagePlaceholder}
            layout={isMobile ? 'responsive' : 'intrinsic'}
            width={isMobile ? '100%' : '80%'}
            sx={{ borderRadius: '10px' }}
        />
    )
}

export default NoImagePlaceHolder
