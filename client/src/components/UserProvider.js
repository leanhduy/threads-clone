import React, { useEffect, useState } from 'react'
import { UserContext } from '../context'

const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null)

    // * Load the user id from localStorage when app initializes
    useEffect(() => {
        const storedId = JSON.parse(localStorage.getItem('userId'))
        if (storedId) {
            setUserId(storedId)
        }
    }, [])

    // * Store the id of the current user to the localStorage and the Context
    const login = (id) => {
        setUserId(id)
        localStorage.setItem('userId', id)
    }

    const logout = () => {
        setUserId(null)
        localStorage.removeItem('userId')
    }

    return (
        <UserContext.Provider value={{ userId, setUserId, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
