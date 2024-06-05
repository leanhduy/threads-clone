import React, { useMemo, useState } from 'react'
import { Navbar, QuickNewPostButton, NewPostDialog } from '../components'
import styled from '@emotion/styled'
import { widths, unit } from '../styles'
import { NewPostContext } from '../context'

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }) => {
    // State for open the create post dialog
    const [isCreatingNewPost, setIsCreatingNewPost] = useState(false)

    const handleOpenNewPostDialog = () => {
        setIsCreatingNewPost(true)
    }

    const handleCloseNewPostDialog = () => {
        setIsCreatingNewPost(false)
    }

    return (
        <>
            <Navbar openNewPostDialog={handleOpenNewPostDialog} />
            <PageContainer fullWidth={fullWidth} grid={grid}>
                <NewPostContext.Provider value={handleOpenNewPostDialog}>
                    {children}
                </NewPostContext.Provider>
            </PageContainer>
            <QuickNewPostButton openNewPostDialog={handleOpenNewPostDialog} />
            <NewPostDialog
                isCreateNewPost={isCreatingNewPost}
                closeNewPostDialog={handleCloseNewPostDialog}
            />
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
