import styled from '@emotion/styled'
import React from 'react'
import spinnerGif from '../assets/spinner.gif'

const Spinner = () => {
    return <SpinnerImg src={spinnerGif} />
}

export default Spinner

const SpinnerImg = styled.img({
    width: '30px',
    height: '30px',
    marginRight: '2rem',
})
