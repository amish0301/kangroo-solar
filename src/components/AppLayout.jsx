import React from 'react'
import { Navbar, Footer } from './index-component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      {/* just remove below px-28 to make it full */}
      <div className='pt-28 md:px-28 mx-auto'>    
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout