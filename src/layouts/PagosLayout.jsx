import React from 'react'
import { Outlet } from 'react-router-dom'
import Pie from '../components/Pie'
import Header from '../components/Header'

export default function PagosLayout() {
  return (
    <div>
      
      <Outlet />
      <Pie></Pie>
    </div>
  )
}
