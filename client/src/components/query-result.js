import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles'
import CircularProgress from '@mui/material/CircularProgress'

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }) => {
    if (error) {
        console.log(error.message)
        return (
            <FallbackContainer>
                <FallbackTitle>No results available at this time</FallbackTitle>
                <FallbackDescription>
                    There are no results to show at this time.
                </FallbackDescription>
            </FallbackContainer>
        )
    }
    if (loading) {
        return (
            <SpinnerContainer>
                <CircularProgress />
            </SpinnerContainer>
        )
    }

    if (data) {
        return children
    }
}

export default QueryResult

/** Query Result styled components */
const SpinnerContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
})

const FallbackContainer = styled.div({
    border: `1px solid ${colors.grey.lighter}`,
    borderRadius: '30px',
    backgroundColor: colors.white,
    padding: '1.5rem 2rem',
    textAlign: 'center',
    alignContent: 'center',
    width: '100%',
})

const FallbackTitle = styled.h3({
    fontSize: '1.25rem',
})

const FallbackDescription = styled.p({
    color: colors.grey.light,
    fontSize: '.875rem',
})
