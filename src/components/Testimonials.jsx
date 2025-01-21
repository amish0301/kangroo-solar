import React from 'react'
import { useInView } from 'react-intersection-observer';

const Testimonials = ({ list }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section ref={ref} className={`w-full max-w-7xl mx-auto border-b-2 py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 fade-in ${inView ? 'fade-in-visible' : ''}`}>
      {list && list.map((item, index) => (
        <div
          key={index}
          className={`relative group overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 text-white shadow-xl rounded-lg`}
          style={{ height: '400px' }}
        >
          {/* Front Side */}
          <div className={`flex flex-col items-center justify-center h-full p-6`}>
            <img
              src={item.img}
              alt="Client Photo"
              loading="lazy"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-md mb-6 border-4 border-white"
            />
            <h3 className="text-base md:text-lg font-semibold tracking-wide">{item.clientName}</h3>
            {item.designation ? (
              <p className="text-xs md:text-sm mt-2 opacity-80">{item.designation}</p>
            ) : (
              <p className="text-xs md:text-sm mt-2 opacity-80">Happy Client</p>
            )}
          </div>

          {/* Backside (Description Slide Up Effect) */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="flex flex-col justify-center h-full">
              <p className="text-sm italic leading-relaxed overflow-hidden">
                "{item.desc}"
              </p>
              <div className="text-right mt-4">
                <span className="text-xs font-medium opacity-90">- {item.clientName}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {!list && <p className="text-center col-span-full text-gray-500">No Testimonial Found</p>}
    </section>

  )
}

export default Testimonials