import React from 'react'
import { Navbar } from '../components'
import styled from '@emotion/styled'
import { widths, unit, colors } from '../styles'

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }) => {
    return (
        <>
            <Navbar />
            <PageContainer fullWidth={fullWidth} grid={grid}>
                {children}
            </PageContainer>
        </>
    )
}

export default Layout

/** Layout styled components */
const PageContainer = styled.div((props) => ({
    display: 'flex',
    justifyContent: props.grid ? 'center' : 'top',
    flexDirection: props.grid ? 'row' : 'column',
    flexWrap: 'wrap',
    alignSelf: 'center',
    flexGrow: 1,
    width: `${widths.textPageWidth}px`,
    maxWidth: props.fullWidth ? undefined : `${widths.textPageWidth}px`,
    width: '100%',
    padding: props.fullWidth ? 0 : unit * 2,
    paddingBottom: unit * 5,
}))
