import React from 'react'

const IconCards = ({ list }) => {
    return (
        <div className='w-full bg-transparent grid z-10 grid-cols-2 sm:grid-cols-3 gap-5 p-5'>
            {
                list.map((item, index) => (
                    <div key={index} className='w-full max-w-4xl bg-[#ffffff24] h-[180px] p-5 rounded-xl text-white'>
                        {item?.icon && <item.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />}
                        <p className='text-lg mt-5 tracking-wider'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default IconCards