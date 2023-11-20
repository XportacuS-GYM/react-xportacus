import React, {useContext} from 'react'
import { products } from '../data'
import { ShopContext } from '../context/shop-context';
import { ItemCarrito } from '../components/ItemCarrito';
import { useNavigate} from 'react-router-dom'
export const Carrito = () => {
    const {cartItems,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1>Tu carrito mi pai</h1>
        </div>

        <div className=''>
            {products.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <ItemCarrito data={product} />;
              }
            })}
        </div>

        {totalAmount > 0 ? (
        <div>
            <p className='font-medium'>Subtotal: ${totalAmount}</p>
            <button className='w-[150px] h-[50px] bg-slate-700 text-white border-none rounded-[8px] m-[10px] cursor-pointer'
            onClick={()=> navigate("/tienda") }>
                Continua comprando
            </button>
            <button className='w-[150px] h-[50px] bg-slate-700 text-white border-none rounded-[8px] m-[10px] cursor-pointer'>
                Chekout
            </button>
        </div>
       ) : (
       <h1 className='text-[3em]'>Tu carrito esta vacio :c </h1> 
       )}
    </div>
  )
}
