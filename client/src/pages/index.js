import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/** importing our pages */
import Home from './home'
import Search from './search'
import Profile from './profile'
import Activity from './activity'

export default function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Search />} path="/search" />
                <Route element={<Profile />} path="/profile/:username" />
                <Route element={<Activity />} path="/activity" />
            </Routes>
        </BrowserRouter>
    )
}
