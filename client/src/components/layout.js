import React, { useState } from 'react'
import { Navbar, NewPostButton, NewPostDialog } from '../components'
import styled from '@emotion/styled'
import { widths, unit } from '../styles'

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }) => {
    // State for open the create post dialog
    const [open, setOpen] = useState(true)

    const handleOpenDialog = () => {
        setOpen(true)
    }

    const handleCloseDialog = () => {
        setOpen(false)
    }

    return (
        <>
            <Navbar openNewPostDialog={handleOpenDialog} />
            <PageContainer fullWidth={fullWidth} grid={grid}>
                {children}
            </PageContainer>
            <NewPostButton />
            <NewPostDialog open={open} onClose={handleCloseDialog} />
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
    maxWidth: props.fullWidth ? undefined : `${widths.textPageWidth}px`,
    width: '70%',
    padding: props.fullWidth ? 0 : unit * 2,
    paddingBottom: unit * 5,
}))
