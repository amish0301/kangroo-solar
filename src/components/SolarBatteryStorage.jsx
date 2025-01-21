import React from 'react'
import solar_battery from '../assets/images/solar_battery.webp';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const SolarBatteryStorage = () => {

    const navigate = useNavigate();
    const { ref, inView } = useInView({
        triggerOnce: true,  // Trigger only once
        threshold: 0.5,     // Load when 50% is visible
      });

    return (
        <section className='w-full text-primary py-20 bg-cover bg-no-repeat' aria-labelledby='solar-battery-section' style={{ backgroundImage: `url(${solar_battery})` }}>
            <div className={`container px-6 py-5 fade-in ${inView ? 'fade-in-visible' : ''}`} ref={ref}>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 max-w-4xl px-10 items-center'>
                    <div className="space-y-4">
                        <h2 className='text-balance font-semibold text-2xl md:text-3xl'>Solar Battery & Storage</h2>
                        <h4 className='text-balance text-base font-semibold'>SOLAR VIC Battery LOAN PROGRAM - VIC ONLY</h4>
                        <p className='text-pretty text-sm md:text-base text-[#efefef] leading-relaxed'>Most of the Home with Solar Panels, Generate power during daytime and supply it to the house first and any excess power Fed back to supplier or Retailer to earn Solar Feed in Tariff , This is where the Solar Battery system can help homeowners to store their access power when there is any shortfall from solar PV generation or at night time when sun is not shinning.</p>

                        <div className='flex items-center space-x-4 pt-3 md:pt-4'>
                            <button type='button' className='bg-[#07090a] py-3 px-5 text-[#7d954d] rounded-md hover:bg-[#091115eb] hover:translate-y-1 transition-all duration-300 ease-out' onClick={() => navigate('/contact')}>Contact Us</button>
                            <button type='button' className='secondary-btn' onClick={() => navigate('/contact')}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolarBatteryStorage