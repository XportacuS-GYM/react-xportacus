import Hero from '../components/Hero';
import Rutinas from '../components/Rutinas';
import Membresia from '../components/Membresia';
import Shop from '../components/Shop';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';

const Inicio = () => {

  const {logout} = useAuth({middleware: 'auth'});

  return (
    //LA PAG PRINCIPAL
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <Hero />
      <Rutinas />
      <Membresia />
      <Shop />
      <Footer />
    </div>

  );
};

export default Inicio;

