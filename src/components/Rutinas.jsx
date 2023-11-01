import { gym1, gym2, gym3 } from '../assets/images';

const Rutinas = () => {
    return (
        <section className='section'>
            <div className="container mx-auto">
                <div className='flex flex-col '>
                    <h1 className='font-primary font-semibold text-[32px] text-[#FFE000]'>QUE PODEMOS OFRECERTE? </h1>
                    <h2 className='font-poppins font-bold text-[50px] '>CLASES DE RUTINAS</h2>
                    <div className="border-t border-black border-2"></div>

                    <div className="flex items-start justify-start py-4 md:py-8 flex-wrap">
                        <button type="button" className="text-[#FFE000] hover:text-white border border-yellow-600 bg-white hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-yellow-400 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:bg-gray-900 dark:focus:ring-[#FFE000]">Todas</button>
                        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sentadillas</button>
                        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Flexiones</button>
                        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Planchas</button>
                        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Burpees</button>
                    </div>
                    <div className='p-5 md:p-10'>
                        <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
                            <img src="https://media.gq.com.mx/photos/625db17471f363f634bce022/4:3/w_2668,h_2001,c_limit/ejercicio-1388957838.jpg" alt="gym1" />
                            <img src="https://img.freepik.com/fotos-premium/levantamiento-pesas-joven-hombre-fuerte-deportivo-vestido-negro-tiene-dia-entrenamiento-gimnasio_146671-39630.jpg?w=360" alt="gym2" />
                            <img src="https://img.freepik.com/foto-gratis/joven-atleta-musculoso-practicando-gimnasio-posando-confiado-pesas_155003-35490.jpg" alt="gym3" />
                            <img src="https://img.freepik.com/fotos-premium/joven-atletico-cuerda-batalla-haciendo-ejercicio-gimnasio-entrenamiento-funcional_484651-8035.jpg?size=626&ext=jpg" alt="gym4" />
                            <img src={gym1} alt="" />
                            <img src={gym2} alt="" />
                            <img src={gym3} alt="" />

                        </div>
                        <div className='flex items-center justify-center mt-10'>
                            <button type="button" className='bg-[#FFE000] uppercase px-[35px] py-[9px] text-[20px] rounded-[38px] font-poppins font-medium'>Ver Mas Clases</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rutinas