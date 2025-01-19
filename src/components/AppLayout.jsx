import React from 'react'
import { Navbar, Footer } from './index-component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout