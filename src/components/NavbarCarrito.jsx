import React from 'react'
import { logo } from "../assets/images"
import { Link } from "react-router-dom"
import { CgShoppingCart } from "react-icons/cg"
import { navigation } from '../data';

export default function NavbarCarrito() {
  return (
    <div>
      
      <nav className=" w-full h-[90px] mx-auto bg-primary flex items-center justify-end text-white ">
        <a href="" className="mr-[620px]">
            <img src={logo} alt="logo" className="h-6 lg:h-8" />
        </a>
        
        <div>
          <ul className='md:flex md:gap-x-12 mr-[50px]'>
            {navigation.map((item, index) => {
            return <li key={index}>
              <a className='capitalize text-white hover:border-b transition-all font-poppins font-medium' href={item.href}>
                 {item.name}
              </a>
              </li>
              })}
          </ul>
        </div>

        <Link to="/tienda" className="text-[1.2em]">Shop</Link>
        <Link to="/tienda/carrito">
        <CgShoppingCart size={32} className="mr-[50px]" />
        </Link>
      </nav>

    </div>
  )
}
