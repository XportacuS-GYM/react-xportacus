import React from 'react'
import { Tarjeta } from '../components/Tarjeta'
import { logo } from '../assets/images'
//bg-[#06132B]
export default function Pagos() {
  return (
    <div>
        <header className='w-full h-[90px] mx-auto bg-primary flex items-center text-white '>
            <nav className='flex' >
            <a href="">
                <img src={logo} alt="logo" className="h-6 lg:h-8 ml-[40px]" />
            </a>
            <h1 className='text-white text-[1.3em] ml-[10px]'>Acredita tu pago</h1>
            
            <ul className='text-white text-[1.2em] pl-[850px]'>
                <a href='/'>Regresar</a>
            </ul>
            </nav>
        </header>

        <div className='grid grid-cols-2'>
            <div className='m-[20px]'>
                <div className='py-[10px]'>
                    <h1 className='text-[1.5em] font-semibold'>Medio de pago</h1>
                    <p>Para poder acreditar tu pago, favor de rellenar los campos que se le piden</p>
                </div>        
                <Tarjeta />
            </div>

            <div className='bg-gray-300 max-w-[300px] max-h-[300px] mt-[80px] p-[20px] rounded-[7px]'>

                <div className='w-full'>
                    <h2 className='text-[1.125em] '>
                        <span>Detalle de la suscripción</span>
                    </h2>
                    <div className='mb-[0.75em] flex'>
                        <span>Suscripcion mensual a XportacuS</span>
                        <span>$99</span>
                        <span className='text-[.625em] mr-0'>00</span>
                    </div>
                    <hr/>
                    <div className='my-[0.75em] flex '>
                        <span>Total a pagar</span>
                        <span className='ml-[10px]'>$99</span>
                        <span className='text-[.625em] mr-0' >00</span>
                    </div>
                    <button className='bg-slate-800 text-white w-[200px] h-[40px] rounded-[5px] hover:bg-sky-800 mt-[10px] ml-[25px]'>Pagar Suscripción</button>
                    <p className='text-[0.75em] text-center'>La suscripción la puedes cancelar en el momento que quieras.</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}
