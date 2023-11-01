import { useAuth } from "../hooks/useAuth"
export default function Inicio() {


  const {logout, user} = useAuth({middleware: 'auth'})

  return (
    //LA PAG PRINCIPAL
    <div>Inicio
      <button onClick={logout}>Salir </button>

      <br />
      <p>Hola: {user?.name}</p>
    </div>

  )
}
