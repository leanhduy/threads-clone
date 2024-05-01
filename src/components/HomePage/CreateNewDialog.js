import { SafetyDivider } from '@mui/icons-material'
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    List,
    ListItemText,
    ListItemButton,
    Menu,
    MenuItem,
    Divider,
} from '@mui/material'

import { useEffect, useState } from 'react'

const replyOptions = ['Your followers', 'Profiles you follow', 'Mentioned only']

const CreateNewDialog = ({ openDialog, handleOpen, handleClose }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const openMenu = Boolean(anchorEl)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formJson = Object.fromEntries(formData.entries())
        const email = formJson.email
        console.log(email)
        handleClose()
    }

    const handleClickListItem = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index)
        setAnchorEl(null)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                {/* TODO: REPLACE WITH NEW THREAD FORM */}
                <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '1.5rem',
                }}
            >
                <Box>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItemButton
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-expanded={openMenu ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                primary={replyOptions[selectedIndex]}
                            />
                        </ListItemButton>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {replyOptions.map((option, index) => (
                            <Box key={option}>
                                <MenuItem
                                    disabled={index === selectedIndex}
                                    onClick={(event) =>
                                        handleMenuItemClick(event, index)
                                    }
                                    selected={index === selectedIndex}
                                >
                                    {option}
                                </MenuItem>
                                {index < replyOptions.length - 1 && (
                                    <Divider sx={{ my: 0.5 }} />
                                )}
                            </Box>
                        ))}
                    </Menu>
                </Box>
                <Button
                    sx={{
                        color: 'white',
                        backgroundColor: '#b0b3b8',
                        borderRadius: '25px',
                        '&:hover': {
                            cursor: 'not-allowed',
                        },
                    }}
                    type="submit"
                >
                    Post
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateNewDialog
