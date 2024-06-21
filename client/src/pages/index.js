import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Search from './search'
import Profile from './profile'
import Activity from './activity'
import SignUp from './signup'

export default function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Search />} path="/search" />
                <Route element={<Profile />} path="/profile/:username" />
                <Route element={<Activity />} path="/activity" />
                <Route element={<SignUp />} path="/signup" />
            </Routes>
        </BrowserRouter>
    )
}
