'use client'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Header/Navbar'
const Layout = () => {
  return (
    <div>
        <h1>Layout</h1>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default Layout