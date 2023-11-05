import React from 'react'
import Logo from '../assets/images/logo.png'
const Footer = () => {
    return (
        <Footer className="section bg-[#06132B] text-white">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 ph-7 lg:pb-14'></div>
                <a href="#">
                    <img src={Logo} alt="logo" className="w-24" />
                </a>
                <p className='text-center'>&copy:XportacuS 2023 - Todos los derechos reservados.</p>
            </div>
        </Footer>
    )
}

export default Footer