import { Avatar, Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import CreateNewDialog from './CreateNewDialog'
import { defaultAvatarURL } from '../utils/consts'

const CreateNew = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const handleOpen = () => {
        setOpenDialog(true)
    }
    const handleClose = () => {
        setOpenDialog(false)
    }
    return (
        <Box
            display="flex"
            columnGap={1.5}
            sx={{
                alignItems: 'center',
                borderBottom: '1px solid #b0b3b8',
                margin: '5rem auto 0',
                maxWidth: '90%',
                padding: '1rem 0',
            }}
        >
            <Avatar src={defaultAvatarURL} />
            <Button
                variant="text"
                onClick={handleOpen}
                sx={{
                    color: '#b0b3b8',
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    textTransform: 'none',
                    '&:hover': {
                        cursor: 'text',
                    },
                }}
            >
                Start a thread...
            </Button>
            <Box
                sx={{
                    backgroundColor: '#b0b3b8',
                    borderRadius: '25px',
                    '&:hover': {
                        cursor: 'not-allowed',
                    },
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '.95rem',
                        padding: '.25rem 1.15rem',
                    }}
                >
                    Post
                </Typography>
            </Box>
            {/* Dialog */}
            <CreateNewDialog
                openDialog={openDialog}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
        </Box>
    )
}

export default CreateNew
