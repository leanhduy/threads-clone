import { createContext, useState } from 'react'

const NewThreadContext = createContext()

const NotificationContext = createContext({
    open: false, // Initial notification state
    message: '',
    type: '',
    handleClose: () => {}, // Empty function for initial state
})

const NotificationContextProvider = ({ children }) => {
    const [notificationState, setNotificationState] = useState({
        open: false,
        message: '',
        type: '',
    })

    const handleOpenNotification = (message, type) => {
        setNotificationState({ open: true, message, type })
    }

    const handleCloseNotification = () => {
        setNotificationState({ open: false })
    }

    const contextValue = {
        ...notificationState,
        handleOpenNotification,
        handleCloseNotification,
    }

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    )
}

export { NewThreadContext, NotificationContext, NotificationContextProvider }
