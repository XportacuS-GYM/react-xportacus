import { Outlet } from 'react-router-dom'
export default function AuthLayout() {
  return (
    <main className='m-auto mt-10 md:mt-20 flex flex-col md:flex-rows items-center'>

      <img
        src='../img/xportacus_logo.png'
        alt='imagen logotipo'
        className="max-w-md"
      />
      <div className=''>
        <Outlet />
      </div>

    </main>
  )
}
