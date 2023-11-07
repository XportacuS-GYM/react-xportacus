import React from 'react'

import Servicios from '../components/Servicios'
const Hero = () => {

  return (
    <section className='h-[799px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[230px] pb-[254px] relative mb-12 lg-bg-center lg-mb-28'>
      <div className="container mx-auto text-center">

        <h1 className='font-secundary text-gray-400 text-sm mx-auto font-semibold mb-[10px] lg:text-[24px] lg:leading-tight lg:max-w-[888px]'>XPORTACUS FITNESS</h1>

        <h2 className='font-primary font-medium uppercase text-[60px] max-w-[627px] mx-auto lg:text-[97px]'>Ready<span className="text-yellow-400 text-[60px] font-medium font-inter lg:text-[97px]">!</span></h2>
        <h3 className='text-yellow-400 font-primary font-medium uppercase text-[60px] lg:text-[97px] mx-auto '>
          <span className="text-white ">gym</span>
          <span>.</span>
          <span className=" text-white">routines</span>
          <span>.</span>
          <span className="text-white">shop</span>
          <span>.</span>
        </h3>
        <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] lg:mb-[50px] text-xl rounded-[23px] backdrop:blur-md text-hardColor font-primary font-medium transition-all'>Obtener Membresia</button>

        <div>
          <Servicios />
        </div>
      </div>
    </section>
  )
}

export default Hero