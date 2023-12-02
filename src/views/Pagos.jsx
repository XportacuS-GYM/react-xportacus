import React from 'react'
import { Tarjeta } from '../components/Tarjeta'

export default function Pagos() {
  return (
    <div>
        <header className=' bg-[#06132B] w-full h-[100px] flex items-center'>
            <h1 className='text-white text-[1.5em] ml-[10px]'>Acredita tu pago</h1>
            <nav >
                <ul className='text-white text-[1.5em] '>
                    <li>Regresar</li>
                </ul>
            </nav>
        </header>

        <div className='grid grid-cols-2'>
            <div className='m-[20px]'>
                <h1>Medio de pago</h1>
                <p>Para poder acreditar tu pago, favor de rellenar los campos que se le piden</p>
                <Tarjeta />
            </div>

            <div className='bg-grey max-w-[300px] max-h-[300px] mt-[60px] p-[20px]'>
                <h1>Detalle de tu suscripcion</h1>
                <h1>aaaa</h1>
                <p>aaa</p>
                <p>aaa</p>
            </div>
        </div>
    
    </div>
  )
}
