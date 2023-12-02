import React, { useState, useEffect } from 'react';
import { logo } from '../assets/images'
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { navigation } from '../data';
import NavMobile from './NavMobile';


const Header = () => {
    const [bg, setBg] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [inicioSesion, setInicioSesion] = useState(false);
    const [nombreUsuario, setNombreUsuario] = useState('');

    const handleLogin= () => {
        // Realiza lógica de autenticación aquí
        // Por ahora, solo simulamos que el inicio de sesión es exitoso
        setInicioSesion(true);
        setNombreUsuario('Juanito'); // Puedes obtener el nombre de usuario de tu lógica de autenticación
      };
      
      const handleLogout = () => {
        // Realiza lógica de cierre de sesión aquí
        // Por ahora, simplemente simulamos que cerramos sesión
        setInicioSesion(false);
        setNombrrUsuario('');
      };
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    })
    return (
        <header className={`${bg ? 'bg-primary py-4 lg:py-6' : 'bg-none'} fixed left-0 w-full py-8 z-10 translate-all duration-200`}>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href="#">
                        <img src={logo} alt="logo" className='h-6 lg:h-8' />
                    </a>
                    <div onClick={() => setMobileNav(!mobileNav)}
                        className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'>
                        {mobileNav ? <CgClose /> : <CgMenuRight />}
                    </div>
                    <nav className='hidden md:flex'>
                        <ul className='md:flex md:gap-x-12'>
                            {navigation.map((item, index) => {
                                return <li key={index}>
                                    <a className='capitalize text-white hover:border-b transition-all font-poppins font-medium' href={item.href}>
                                        {item.name}
                                    </a>  
                                </li>
                            })}
                            {inicioSesion ? (<div className='capitalize text-white hover:border-b transition-all font-poppins font-medium' >
                                <p>Bienvenido, {nombreUsuario}.</p>  
                                <button onClick={handleLogout}>Cerrar Sesión</button>
                                </div>):
                                 (<div className='capitalize text-white transition-all font-poppins font-medium '>
                                    <button onClick={handleLogin} className='mr-[10px] hover:border-b'>Iniciar Sesion</button>
                                    <button className='hover:border-b'> Registrarse </button>
                                 </div> )
                            } 
                        </ul>
                    </nav>

                    <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
                        <NavMobile />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header