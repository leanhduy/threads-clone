import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/** importing our pages */
import Home from './home'
import Search from './search'
import Profile from './profile'

export default function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Search />} path="/search" />
                <Route element={<Profile />} path="/profile/:username" />
            </Routes>
        </BrowserRouter>
    )
}
