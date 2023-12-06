import React, {useContext} from 'react'
import { products } from '../data'
import { ShopContext } from '../context/shop-context';
import { ItemCarrito } from '../components/ItemCarrito';
import { useNavigate} from 'react-router-dom'
import { Tarjeta } from './Tarjeta';
import AlertaValidacion from './AlertaValidacion';


export const PagoCarrito = () => {

    const {cartItems,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate()
  
  return (
    <div>
        
        <div className='grid grid-cols-2'>

        <div className='m-[20px]'>
            <div className='py-[10px]'>
                <h1 className='text-[1.5em] font-semibold'>Método de pago</h1>
                <p>Para poder acreditar tu compra, favor de rellenar los campos que se le piden</p>
            </div>        
            <Tarjeta />
        </div>

        <div className='bg-gray-300 max-w-[300px] max-h-[300px] mt-[80px] p-[20px] rounded-[7px]'>
        <div className='w-full'>
            <h2 className='text-[1.125em] '>
                <span>Detalle de tu compra</span>
            </h2>
            <div className='mb-[0.75em] flex'>
                <div className=''>
                
                </div>
            </div>
            <hr/>
            <div className='my-[0.75em] flex '>
                <span>Total a pagar:</span>
                <p className='font-medium ml-[10px]'>${totalAmount}</p>
                <span className='text-[.625em] mr-0' >00</span>
            </div>
            <div className='flex items-center flex-col'>
                <AlertaValidacion />  
                <button onClick={()=> navigate("/tienda/carrito") } className='bg-slate-800 text-white w-[200px] h-[40px] rounded-[5px] hover:bg-sky-800 mt-[10px] ml-[25px]'>Regresar</button>
            </div>
                
            </div>
        </div>
        </div>
    </div>

  )
}
