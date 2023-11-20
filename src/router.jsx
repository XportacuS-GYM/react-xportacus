import { createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminDashboard from './views/AdminDashboard'
import LayoutAdmin from './layouts/LayoutAdmin'
import AdminMembers from './views/AdminMembers'
import TiendaLayout from './layouts/TiendaLayout'
import Tienda from './views/Tienda'
import { Carrito } from './views/Carrito'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index:true,
                element: <Inicio />
            },
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
    },
    ,
    {
        path: '/tienda',
        element: <TiendaLayout/>,
        children:[
            {
                index:true,
                element: <Tienda/>
            },
            {
                path: '/tienda/Carrito',
                element: <Carrito />
            }
        ]
    }
])

export default router