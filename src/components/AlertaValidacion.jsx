import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
const AlertButton = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleClick = () => {
    setMostrarAlerta(true)

    setTimeout(() => {
      setMostrarAlerta(false);
    }, 3000);

    Swal.fire({
        icon: "success",
        title: "Se realizó el pago correctamente",
        showConfirmButton: false,
        timer: 1500,
        confirmButtonText:'OK',
      })
  };

  return (
    <div className="">
      <button className="bg-slate-800 text-white w-[200px] h-[40px] ml-[10px] rounded-[5px] hover:bg-sky-800" onClick={handleClick}>
        Pagar
      </button>

      {mostrarAlerta && (
       <p></p>
      )}
    </div>
  );
};

export default AlertButton; 