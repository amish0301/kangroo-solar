import React from 'react'
import img1 from '../assets/images/Gallery/1.jpg'
import img2 from '../assets/images/Gallery/2.jpg'
import img3 from '../assets/images/Gallery/3.jpg'
import img4 from '../assets/images/Gallery/4.jpg'
import img5 from '../assets/images/Gallery/6.jpg'
import img6 from '../assets/images/Gallery/7.jpg'
import img7 from '../assets/images/Gallery/8.jpg'
import img8 from '../assets/images/Gallery/9.jpg'


const Gallery = () => {
  return (
    <section className="w-full bg-gray-100 py-10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          Our Solar Integration Projects
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover how solar panels seamlessly integrate into homes and commercial spaces,
          making them eco-friendly and efficient.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <img
              src={img1}
              alt="Solar Panel Home"
              loading='lazy'
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Residential Solar</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src={img2}
              loading='lazy'
              alt="Commercial Solar Panels"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Commercial Solar</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src={img7}
              loading='lazy'
              alt="Rooftop Solar Panel"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Rooftop Solar</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src={img4}
              loading='lazy'
              alt="Solar Farm"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Solar Farms</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src={img5}
              loading='lazy'
              alt="Solar Farm"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Solar Farms</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src={img6}
              loading='lazy'
              alt="Solar Farm"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Solar Installation</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src={img3}
              loading='lazy'
              alt="Solar Farm"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Commercial Solar</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src={img8}
              loading='lazy'
              alt="Solar Farm"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Solar Integration</p>
            </div>
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
    </section>

  )
}

export default Gallery