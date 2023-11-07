import React from 'react'
import { footer } from '../assets/images';
const Pie = () => {
    return (
        <footer className="section bg-[#06132B] text-white">
            <a href="#" className='flex flex-col items-center'>
                <img src={footer} alt="logo" className="w-32 sm:mb-5 lg:w-36" />
            </a>
            <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 ph-7 lg:pb-14 mb-2'></div>
            <p className='text-center font-primary text-[14px]'>© XportacuS 2023 - Todos los derechos reservados.</p>
        </footer>
    )
}

export default Pie