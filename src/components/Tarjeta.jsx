import React, {useState} from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export const Tarjeta = () => {
    
    const  [state, setState] = useState({
        number:"" ,
        name:"",
        expiry:"",
        cvc:"",
        focus:""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    const procesarPago = () => {
        console.log("number =>", state.number)
        console.log("name =>", state.name)
        console.log("expiry =>", state.expiry)
        console.log("cvc =>", state.cvc)
        console.log(JSON.stringify(state))
    }

  return (
    <div className=''>
        <div className='max-w-[500px] max-h-[600px] bg-white rounded-[20px]'>
            <div className='p-[20px] '>
                <Cards
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focus}
                />

                <form action="" className='pt-[20px]'> 
                    <div className='p-[10px] flex flex-col'>
                        <label >Numero</label>
                        <input className='appearance-none border-[2px]' type="text" name='number'id='number' maxlength="16" onChange={handleInputChange} onFocus={handleFocusChange}/>
                    </div>
                    <div className='p-[10px] flex flex-col'>
                        <label >Nombre</label>
                        <input className='border-[2px]' type="text" name='name'id='name' maxlength="30" onChange={handleInputChange} onFocus={handleFocusChange}/>
                    </div>
                    <div className='flex gap-x-10'>
                        <div className='p-[10px] flex flex-col w-[100px]'>
                            <label >Expriacion</label>
                            <input className='border-[2px]' type="text" name='expiry'id='expiry' maxlength="4" onChange={handleInputChange} onFocus={handleFocusChange}/>
                        </div>
                        <div className='p-[10px] flex flex-col'>
                            <label>ccv</label>
                            <input className='border-[2px] w-[100px]' type="text" name='cvc'id='cvc' maxlength="4" onChange={handleInputChange} onFocus={handleFocusChange}/>
                        </div>
                    </div>
                    
                </form>

                <button onClick={procesarPago} type='button' className='bg-slate-800 text-white w-[200px] h-[40px] ml-[10px] rounded-[5px] hover:bg-sky-800' >Pagar</button>
            </div>
            
        </div>
        

    </div>
  )
}
