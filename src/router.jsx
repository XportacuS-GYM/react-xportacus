import { createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminDashboard from './views/AdminDashboard'
import LayoutAdmin from './layouts/LayoutAdmin'
import AdminMembers from './views/AdminMembers'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index:true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    {
        path: '/admin',
        element: <LayoutAdmin/>,
        children:[
            {
                path: '/admin/AdminDashboard',
                element: <AdminDashboard />
            },
            {
                path: '/admin/AdminMembers',
                element: <AdminMembers />
            },
            
        ]
    }

    //ESTA MADRE ES DE LAS VENTANAS, LAS RUTAS 
])

export default router