import { Outlet } from 'react-router-dom'
import { ShopContextProvider } from '../context/shop-context'
import NavbarCarrito from '../components/NavbarCarrito'
import Pie from '../components/Pie'
import Header from '../components/Header'

export default function TiendaLayout() {
  return (
    <div>
      <ShopContextProvider>
        
        <NavbarCarrito></NavbarCarrito>
        <Outlet />
        <Pie></Pie>
      </ShopContextProvider>
    </div>
  )
}

