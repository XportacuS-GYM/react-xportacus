import { membresia } from '../data'
import { pesarusa, pesa, silbato, cronometro } from '../assets/images';
const Membresia = () => {
    const { name, title, subtitle } = membresia;
    return (
        <section className='h-[770px] w-full text-white bg-membresia bg-center bg-cover bg-no-repeat pt-[150px] pb-[254px] relative mb-12 lg-bg-center lg-mb-28'>
            <div className="container mx-auto text-center">
                <h1 className='font-poppins text-[#FFE000] text-sm mx-auto font-semibold  mb-[10px] lg:text-[24px] lg:leading-tight lg:max-w-[888px]'>{name}</h1>
                <h2 className='font-poppins font-semibold text-4xl mb-2'>{title}</h2>
                <h1 className='font-primary text-[#4E5A65] text-sm mx-auto font-semibold mb-[10px] lg:text-[24px] lg:leading-tight lg:max-w-[888px]'>{subtitle}</h1>

                <div className="border-t  border-[#4E5A65] border-2"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[120px] sm:mt-20 text-white font-primary uppercase font-semibold">
                    <div className="p-4 flex flex-col items-center">
                        <img src={pesarusa} alt="pesarusa" className="w-[128px] h-[128px] object-cover" />
                        <p className="mt-2 text-center ">Crossfit</p>
                    </div>

                    <div className="p-4 flex flex-col items-center">
                        <img src={pesa} alt="pesa" className="w-[128px] h-[128px] object-cover rounded-lg" />
                        <p className="mt-2 text-center ">Equipo de Calidad</p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <img src={silbato} alt="silbato" className="w-[128px] h-[128px]  object-cover rounded-lg" />
                        <p className="mt-2 text-center ">Execelentes Coaches</p>
                    </div>

                    <div className="p-4 flex flex-col items-center">
                        <img src={cronometro} alt="cronometro" className="w-[128px] h-[128px]  object-cover " />
                        <p className="mt-2 text-center ">Horario Flexible</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Membresia