import React from 'react'
import { Tarjeta } from '../components/Tarjeta'

export default function Pagos() {
  return (
    <div>
        <header className=' bg-primary w-full h-[100px] flex items-center'>
            <h1 className='text-white text-[1.5em] ml-[10px]'>Acredita tu pago</h1>
        </header>

        <div className='my-[10px]'>
        <Tarjeta />
        </div>
    </div>
  )
}
