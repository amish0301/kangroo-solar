import React from 'react'
import ImageSwipper from '../shared/ImageSwipper'
import { heroImages } from '../constants'
import Home2 from './Home2'

const Home = () => {
  return (
    <div className='w-full max-h-full'>
      <ImageSwipper heroImages={heroImages} />
      <Home2 />
    </div>
  )
}

export default Home