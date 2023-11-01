import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Layout() {


  const {user, error} = useAuth({middleware: 'auth'})

  return (
    <div>
        Layout

        <Outlet />
    </div>
  )
}
