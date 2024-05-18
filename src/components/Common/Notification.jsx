import { useContext } from 'react'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import { Alert } from '@mui/material'
import { NotificationContext } from '../context/context'

export default function Notification() {
    const { open, message, type, handleCloseNotification } =
        useContext(NotificationContext)

    return (
        <Box sx={{ width: 500 }}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={5000}
                open={open}
                onClose={handleCloseNotification}
                severity="success"
            >
                <Alert
                    onClose={handleCloseNotification}
                    severity={
                        type === 'success'
                            ? 'success'
                            : type === 'warning'
                            ? 'warning'
                            : type === 'error'
                            ? 'error'
                            : 'info'
                    }
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    )
}
