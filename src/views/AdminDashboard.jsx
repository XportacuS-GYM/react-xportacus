export default function AdminDashboard() {
  return (

    
    <div className="">
        <p className="py-[10px] ml-[50px] text-[1.5em]">Hola fulano,</p>

        <div className="w-[968px] h-[196px] pt-[10px] rounded-[2em] ml-[50px] bg-white">
          <p className="text-[1.5em] pl-[2em]">Escanear tu pase</p>
          {/* Como poner el codigo de barras prueba */}
        </div>
        
        <div className="w-[968px] h-[812px] ml-[50px] mt-[50px] rounded-[2em] bg-white">

          <div className="pt-[20px] pl-[20px]  border-b-2 grid grid-cols-2 ">
            <div className="pl-[20px] pb-[10px]">
               <p className="font-bold text-[1.5em]">Membresia de gym XportacuS</p>
               <p className="mt-[10px]">Membresia Activa</p> {/* Como hacer para actualizar el estado*/}
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

          <div>
            <p></p>
          </div>
        
        </div>

    </div>
   
  )
}
