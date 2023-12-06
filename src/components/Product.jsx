import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';


export const Product = (props) => {
    const {id,image, icon,name,price,oldPrice} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems[id]

  return (
    <div className=' w-[300px] h-[350px] m-[100px] rounded-[15px] flex flex-col justify-center items-center '>
        <img src={image} alt="" className='w-[200px] h-[300px]'/>
        <div className='text-center'>
            <p className='font-medium'>{name}</p>
            <div className='flex justify-center '>
                <p className='pr-[10px]'>${price}MXN</p>
                <p className='text-[1em] text-grey line-through'>${oldPrice}MXN</p>
            </div>
        </div>
        <button className='border-[2px] border-[#06132B] bg-[#06132B] text-white px-[10px] py-[5px] rounded-[15px] hover:bg-[#06B]'
        onClick={() => addToCart(id)}>
            Añadir a carrito {cartItemsAmount > 0 && <>({cartItemsAmount}) </> }
        </button>

    </div>
  )
}
