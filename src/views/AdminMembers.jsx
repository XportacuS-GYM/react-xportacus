import React, { useState } from "react";

const data = [
  {
    nombre: 'Juan segoviano',
    direccion: 'Enrique segoviano 123',
    plan: 'Pro',
    email: 'taboada@kkino.com',
    expiracion: '2023-12-31',
    estatus: 'Activa',
  },
];

const usariosPorPagina = 10;


export default function AdminMembers() {
  return (
    <>
    <div className="pl-[50px] py-[20px] flex space-x-[40em] ">
        <p className="text-[1.5em] ">Hola adm,</p>
        <div className="relative ">
          <input type="search" name="" id="" placeholder="Buscar Miembros" className="bg-slate-50 pl-[30px] rounded-[10px] border w-[216px] h-[38px]"/>
          <div className="absolute inset-y-0 left-0 flex items-center pl-[5px] pointer-events-none">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
    </div>

    <div className="w-[968px] h-[161px] pt-[10px] pl-[3em] ml-[50px] rounded-[2em] bg-white flex flex-wrap space-x-10 items-center">
      
      <div className="flex border-r-2 pr-[1em] ">
        <div className="relative">
          <p className="w-[84px] h-[84px] bg-gradient-to-b from-emerald-100 to-green-50 rounded-full" ></p>
          <div className= "absolute inset-y-0 left-0 flex items-center pl-[22px] pointer-events-none">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0302 19.0229C15.8552 19.0054 15.6452 19.0054 15.4527 19.0229C11.2877 18.8829 7.98022 15.4704 7.98022 11.2704C7.98022 6.98287 11.4452 3.50037 15.7502 3.50037C20.0377 3.50037 23.5202 6.98287 23.5202 11.2704C23.5027 15.4704 20.1952 18.8829 16.0302 19.0229Z" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.7172 6.99963C32.1122 6.99963 34.8422 9.74713 34.8422 13.1246C34.8422 16.4321 32.2172 19.1271 28.9447 19.2496C28.8047 19.2321 28.6472 19.2321 28.4897 19.2496" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2805 25.4796C3.0455 28.3146 3.0455 32.9346 7.2805 35.7521C12.093 38.9721 19.9855 38.9721 24.798 35.7521C29.033 32.9171 29.033 28.2971 24.798 25.4796C20.003 22.2771 12.1105 22.2771 7.2805 25.4796Z" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M32.0947 35.0004C33.3547 34.7379 34.5447 34.2304 35.5247 33.4779C38.2547 31.4304 38.2547 28.0529 35.5247 26.0054C34.5622 25.2704 33.3897 24.7804 32.1472 24.5004" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="pl-[20px] ">
          <p>Total de miembros</p>
          <p className="font-bold">NumMiembros</p>
        </div>
      </div>
      
      <div className="flex border-r-2 pr-[1em] ">
        <div className= "relative">
          <p  className="w-[84px] h-[84px] bg-gradient-to-b from-emerald-100 to-green-50 rounded-full" ></p>
          <div className= "absolute inset-y-0 left-0 flex items-center pl-[22px] pointer-events-none">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0666 31.75L26.5999 34.2834L31.6666 29.2167" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.267 18.117C20.1003 18.1003 19.9003 18.1003 19.717 18.117C15.7503 17.9837 12.6003 14.7337 12.6003 10.7337C12.5836 6.65035 15.9003 3.33368 19.9836 3.33368C24.067 3.33368 27.3836 6.65035 27.3836 10.7337C27.3836 14.7337 24.217 17.9837 20.267 18.117Z" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.9831 36.3498C16.9498 36.3498 13.9331 35.5832 11.6331 34.0498C7.59981 31.3498 7.59981 26.9498 11.6331 24.2665C16.2165 21.1998 23.7331 21.1998 28.3165 24.2665" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="pl-[20px] ">
          <p>Miembros</p>
          <p className="font-bold">NumMiembros</p>
        </div>
      </div>

      <div className="flex ">
        <div className= "relative">
          <p  className="w-[84px] h-[84px] bg-gradient-to-b from-emerald-100 to-green-50 rounded-full" ></p>
          <div className= "absolute inset-y-0 left-0 flex items-center pl-[22px] pointer-events-none">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.27 3.5H30.7125C36.9425 3.5 38.5 5.0575 38.5 11.27V22.3475C38.5 28.5775 36.9425 30.1175 30.73 30.1175H11.27C5.0575 30.135 3.5 28.5775 3.5 22.365V11.27C3.5 5.0575 5.0575 3.5 11.27 3.5Z" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 30.1345V38.4995" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 22.75H38.5" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.125 38.5H28.875" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="pl-[20px] ">
          <p>Activos actualmente</p>
          <p className="font-bold">NumMiembrosActual</p>
        </div>
      </div>

    </div>

    <div className="w-[968px] h-[812px]  ml-[50px] mt-[50px] rounded-[2em] bg-white overflow-x-auto">
    
      <div className="py-[40px] pl-[40px]   border-b-2 grid grid-cols-2 ">
        <div>
          <p className="font-bold text-[1.5em]">Todos los miembros</p>
          <p className="mt-[10px]">Miembros Activos</p>
        </div>

        <div className="pl-[40px] flex items-center" >
          <div className="relative ">
            <input type="search" name="" id="" placeholder="Buscar Miembros" className="bg-slate-50 pl-[30px] rounded-[10px] border w-[216px] h-[38px]"/>
            <div className="absolute inset-y-0 left-0 flex items-center pl-[5px] pointer-events-none">
              <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>

          <select name="" id="" className="w-[154px] h-[38px] bg-slate-50 rounded-[10px] border ml-4">
            <option hidden selected>Ordenar por:</option>
            <option value="">Nuevos</option>
            <option value="">Viejos</option>
          </select>
        </div>
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Dirección</th>
            <th className="px-4 py-2">Plan</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Expiración</th>
            <th className="px-4 py-2">Estatus de Membresía</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.nombre}</td>
              <td className="border px-4 py-2">{row.direccion}</td>
              <td className="border px-4 py-2">{row.plan}</td>
              <td className="border px-4 py-2">{row.email}</td>
              <td className="border px-4 py-2">{row.expiracion}</td>
              <td className="border px-4 py-2">{row.estatus}</td>
            </tr>
            
          ))}
        </tbody>

      </table>

    </div>
    </>
  )
}
