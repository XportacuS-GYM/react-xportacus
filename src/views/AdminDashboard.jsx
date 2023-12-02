import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  
  //MOSTRAR LA INFO DEL MIEMBRO
  const [infoMiembro, setInfoMiembro] = useState({
      nombre: 'Juan segoviano',
      direccion: 'Colina de las aves 123',
      plan: 'Pro',
      email: 'taboada@kkino.com',
      expiracion: '2023-12-31',
      estatus: 'Activa',
  });

  //Para actualizar la info del miembro
  /*
  const actualizarInfoMiembro = () => {
    const newInfoMiembro = {
      nombre: 'Juan segoviano',
      direccion: 'Colina de las aves 123',
      plan: 'Pro',
      email: 'taboada@kkino.com',
      expiracion: '2023-12-31',
      estatus: 'Activa',
    };
   
    setInfoMiembro(newInfoMiembro);
  };*/

  return (
    <div className="">
        <p className="py-[10px] ml-[50px] text-[1.5em]">Hola adm,</p>

        <div className="w-[968px] h-[812px] ml-[50px] rounded-[2em] bg-white">

          <div className="pt-[20px] pl-[20px]  border-b-2 grid grid-cols-2 ">
            <div className="pl-[20px] pb-[10px]">
               <p className="font-bold text-[1.5em]">Membresia de gym XportacuS</p>
               <p className="mt-[10px] text-teal-500">Membresia Activa</p>
            </div>

            <div className="flex items-center">
              <div className="relative ">
                <input type="search" name="" id="" placeholder="Buscar Miembros" className="bg-slate-50 pl-[30px] rounded-[10px] border w-[316px] h-[38px]"/>
                <div className="absolute inset-y-0 left-0 flex items-center pl-[5px] pointer-events-none">
                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[30px] pl-[30px]">
            <div className="border-b-2 w-[900px] mb-[20px]"> 
              <p className="font-medium text-black text-[1.3em]">Hola, {infoMiembro.nombre} 👋🏼</p>
              
            </div>

            <div className="grid grid-cols-3">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" 
                  className="w-[220px] h-[207px] rounded-[200px] " alt="" />

              <div className="flex flex-col font-medium">
                <span className="pb-[10px] text-gray-400">
                  Nombre
                  <p className="font-bold text-black">{infoMiembro.nombre}</p>
                </span>
                
                <span className="pb-[10px] text-gray-400">
                  Direccion
                  <p className="font-bold text-black">{infoMiembro.direccion}</p>
                </span>
                <span className="pb-[10px] text-gray-400">
                  Plan
                  <p className="font-bold text-black">{infoMiembro.plan}</p>
                </span>
                <span className="pb-[10px] text-gray-400">
                  Email
                  <p className="font-bold text-black">{infoMiembro.email}</p>
                </span>
                <span className="pb-[10px] text-gray-400">
                  Expiración
                  <p className="font-bold text-black">{infoMiembro.email}</p>
                </span>

              </div>

              <div>
                <span className="text-gray-400 text-[2em] text-center font-medium">
                  <p>Estatus de la</p>
                  <p>membresia</p>
                </span>
                <div className="w-[130px] h-[47px] ml-[95px] mt-[1em] bg-teal-500 bg-opacity-40 rounded border border-emerald-500 justify-center items-center gap-2.5 inline-flex">
                  <p className="text-center text-emerald-600">Activa</p>
                </div>
              </div>
              
            </div>
            

          </div>
        
        </div>

    </div>
   
  )
}
