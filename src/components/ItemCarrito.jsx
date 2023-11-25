import React, {useContext}from 'react'
import { products } from '../data';
import { ShopContext } from '../context/shop-context';

export const ItemCarrito = (props) => {
  const {id,image, icon,name,price,oldPrice} = props.data;
  const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);

  return (
    <div  className='w-[700px] h-[250px] flex items-center shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-[25px] m-[30px]'>
      <img src={image} alt="" className='w-[200px]' />
      <div className='w-full text-[20px]'>
        <p className='font-medium'> {name}</p>
        <p> ${price}MXN</p>
        
        <div className=''>
          <button className='' onClick={() => removeFromCart(id)} > - </button>
          <input className='w-[40px] text-center font-bold' value={cartItems[id]}  onChange={(e) =>updateCartItemCount(Number(e.target.value),id) }/>
          <button onClick={() => addToCart(id)} > + </button>
        </div>
      </div>

    </div>
  )
}
