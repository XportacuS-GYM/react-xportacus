import Hero from '../components/Hero';
import Rutinas from '../components/Rutinas';
import Membresia from '../components/Membresia';
import Shop from '../components/Shop';
import Footer from '../components/Footer';

const Inicio = () => {
  return (
    //LA PAG PRINCIPAL
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      <Hero />
      <Rutinas />
      <Membresia />
      <Shop />
      <Footer />
      <button onClick={logout}>Salir </button>
    </div>

  );
};

export default Inicio;

