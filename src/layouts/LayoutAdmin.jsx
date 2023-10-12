import { Outlet } from 'react-router-dom'
import SidebarAdmin from '../components/SidebarAdmin'

export default function LayoutAdmin() {
  return (
    <div className="md:flex">
       <SidebarAdmin/>
       
       <main className='flex-1 '>
            <Outlet />
       </main>


    </div>

  )
}
