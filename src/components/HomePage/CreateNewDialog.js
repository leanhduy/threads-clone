import {
    Box,
    Button,
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    List,
    ListItemText,
    ListItemButton,
    Menu,
    MenuItem,
    Divider,
    Typography,
    Avatar,
} from '@mui/material'

import { useState } from 'react'

const replyOptions = ['Anyone', 'Profiles you follow', 'Mentioned only']

const CreateNewDialog = ({ handleOpen, handleClose, openDialog }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const openMenu = Boolean(anchorEl)

    const handleSubmit = (event) => {
        event.preventDefault()
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
            fullWidth
        >
            <Box
                sx={{
                    fontWeight: 'bold',
                    margin: '1rem auto 1rem',
                    textAlign: 'center',
                }}
            >
                New thread
            </Box>
            <DialogContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <Avatar
                        sx={{ color: 'action.active', margin: '0 .5rem' }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body1">Username</Typography>
                        <TextField
                            id="input-with-sx"
                            label=""
                            variant="standard"
                            placeholder="Start a thread..."
                            multiline
                            sx={{ width: '100%' }}
                        />
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 1.5rem',
                }}
            >
                <Box>
                    <List component="nav" aria-label="Device settings">
                        <ListItemButton
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-expanded={openMenu ? 'true' : undefined}
                            disableRipple
                            disableGutters
                            id="lock-button"
                            onClick={handleClickListItem}
                            sx={{
                                fontWeight: 'normal',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <ListItemText
                                sx={{ color: '#b0b3b8' }}
                                primary={`${replyOptions[selectedIndex]} can reply`}
                            />
                        </ListItemButton>
                    </List>
                    <Menu
                        anchorEl={anchorEl}
                        id="lock-menu"
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                        onClose={handleCloseMenu}
                        open={openMenu}
                    >
                        {replyOptions.map((option, index) => (
                            <Box key={option}>
                                <MenuItem
                                    disabled={index === selectedIndex}
                                    onClick={(event) =>
                                        handleMenuItemClick(event, index)
                                    }
                                    selected={index === selectedIndex}
                                    sx={{
                                        fontWeight: 'bold',
                                        padding: 'auto 1rem',
                                    }}
                                >
                                    {option}
                                </MenuItem>
                                {index < replyOptions.length - 1 && <Divider />}
                            </Box>
                        ))}
                    </Menu>
                </Box>
                <Button variant="contained" type="submit">
                    Post
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateNewDialog
