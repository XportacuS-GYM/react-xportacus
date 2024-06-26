import React from 'react';
import Hero from '../components/Hero';
import Rutinas from '../components/Rutinas';
import Membresia from '../components/Membresia';
import Shop from '../components/Shop';
import Pie from '../components/Pie';
import Header from '../components/Header';
import { useAuth } from '../hooks/useAuth';

const Inicio = () => {

  const {logout} = useAuth({middleware: 'auth'});

  return (
    
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Hero />
      <Rutinas />
      <Membresia />
      <Pie />
    </div>

  );
};

export default Inicio;

