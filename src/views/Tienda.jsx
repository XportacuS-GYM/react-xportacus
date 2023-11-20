import Header from "../components/Header"
import Hero from "../components/Hero"
import { Product } from "../components/Product"
import { logo } from "../assets/images"
import { Link } from "react-router-dom"
import { CgShoppingCart } from "react-icons/cg"
import { productos } from "../data"
import { products } from "../data"

export default function Tienda() {
  return (
   
    <div >
      <h1 className="text-[2em] flex justify-center">
        XportacuS ShoP
      </h1>

      <div className="w-full h-auto grid grid-cols-3 place-items-center" >
        {" "}
        {products.map((product)=> (
        <Product data={product} /> ))}
      </div>
    </div>

  )
}
