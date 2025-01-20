import React from 'react'
import solar_battery from '../assets/images/solar_battery.webp';
import { useNavigate } from 'react-router-dom';

const SolarBatteryStorage = () => {

    const navigate = useNavigate();

    return (
        <section className='w-full text-primary py-24 bg-cover bg-center bg-no-repeat' aria-labelledby='solar-battery-section' style={{ backgroundImage: `url(${solar_battery})` }}>
            <div className='container mx-auto px-10 py-5 w-full'>
                <div className='grid gap-5 grid-cols-1 max-w-lg'>
                    <h2 className='text-balance font-semibold text-2xl md:text-3xl'>Solar Battery & Storage</h2>
                    <h4 className='text-balance text-base font-semibold'>SOLAR VIC Battery LOAN PROGRAM - VIC ONLY</h4>
                    <p className='text-pretty w-full text-[#efefef]'>Most of the Home with Solar Panels, Generate power during daytime and supply it to the house first and any excess power Fed back to supplier or Retailer to earn Solar Feed in Tariff , This is where the Solar Battery system can help homeowners to store their access power when there is any shortfall from solar PV generation or at night time when sun is not shinning.</p>

                    <div className='flex items-center justify-items-start-center'>
                        <button type='button' className='mr-5 bg-[#07090a] py-4 px-6 text-[#7d954d] rounded-md hover:bg-[#091115eb] hover:translate-y-2 transition-all duration-300 ease-out' onClick={() => navigate('/contact')}>Contact Us</button>
                        <button type='button' className='py-4 px-6 bg-transparent hover:bg-[#07090a] transition-all ease-out duration-300 hover:translate-y-2  hover:text-white rounded-lg' onClick={() => navigate('/contact')}>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolarBatteryStorage