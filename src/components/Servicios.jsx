import React from 'react';

import {servicios} from '../data';

function Servicios() {
  return (
   <div className='bg-[#06132B] rounded-[20px] p-12'>
    <div className='flex flex-wrap gap-y-8 justify-center'>
      {servicios.map((item, index) => {
      return (
        <div className='min-h-[70px] w3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none' key={index}>
            <div className='text-xl uppercase font-secundary font-semibold '>{item.title}</div>
            <div className='text-base text-gray-400 font-light max-w-[110px] mx-auto'>{item.text}</div>
        </div>
      );
      })}
    </div>
   </div>
  )
}

export default Servicios