import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

import useSWR from "swr";
import clienteAxios from "../config/axios";

export const usePagoMembresia = ({middleware, url}) => {


    const token = localStorage.getItem('AUTH_TOKEN')

    const pagoMembresia = async () => {
        try{
            await clienteAxios.post('/api/pago', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }catch(error){
            throw Error(error?.response?.data?.errors)
        }
    }

    return{
        pagoMembresia
    }

}