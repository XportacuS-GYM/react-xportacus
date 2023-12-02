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
                    <div className='p-[10px] flex flex-col border'>
                        <label >Numero</label>
                        <input className='appearance-none border-[2px]' type="Number" name='number'id='number' maxLength="16" onChange={handleInputChange} onFocus={handleFocusChange}/>
                    </div>
                    <div className='p-[10px] flex flex-col border'>
                        <label >Nombre</label>
                        <input className='border-[2px]' type="text" name='name'id='name' onChange={handleInputChange} onFocus={handleFocusChange}/>
                    </div>
                    <div className='p-[10px] flex flex-col border'>
                        <label >Expriacion</label>
                        <input className='border-[2px]' type="text" name='expiry'id='expiry' onChange={handleInputChange} onFocus={handleFocusChange}/>
                    </div>
                    <div className='p-[10px] flex flex-col border'>
                        <label>ccv</label>
                        <input className='border-[2px]' type="text" name='cvc'id='cvc' onChange={handleInputChange} onFocus={handleFocusChange}/>
                    </div>
                </form>

                <button onClick={procesarPago} type='button' className='bg- w-[150px] h-[40px] border' >Pagar</button>
            </div>
            
        </div>
        

    </div>
  )
}
