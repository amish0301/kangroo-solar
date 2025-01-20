import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/images/Gallery/5.jpg'
import img2 from '../assets/images/Gallery/9.jpg'
import img3 from '../assets/images/Gallery/2.jpg'
import img4 from '../assets/images/Gallery/10.jpg'

const GallerySection = () => {

    const navigate = useNavigate();

    return (
        <section className="w-full py-10 bg-cover bg-center relative" style={{ backgroundImage: `url(${img4})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="container mx-auto px-5 text-center md:py-5 py-3 relative">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                    Explore Our Solar Gallery
                </h2>
                <p className="text-primary mb-6 text-balance py-4 text-base">
                    Discover inspiring solar integration projects for homes and commercial spaces.
                    See how solar energy is shaping a sustainable future.
                </p>

                {/* Dynamic Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 py-4">
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={img1}
                            loading='lazy'
                            alt="Solar Panel Installation"
                            className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={img2}
                            loading='lazy'
                            alt="Solar Energy at Home"
                            className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={img3}
                            loading='lazy'
                            alt="Commercial Solar Solutions"
                            className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                </div>

                {/* CTA button */}

                <button aria-labelledby='cta-gallery' type="button" className="inline-block bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors" onClick={() => navigate('/gallery')}>
                    Visit Our Gallery
                </button>
            </div>
        </section>

    )
}

export default GallerySection