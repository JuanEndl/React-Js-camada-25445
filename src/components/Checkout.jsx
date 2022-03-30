import React from 'react'
import { addOrder } from './firebase/firebaseClient'


const orderHandler = () => { 
    const order = {
        hola: 'mundo'
    }
    
    
    
    
    addOrder(order).then(
        data => {
            console.log(data)
        }
    )
    console.log('se realizo pedido')
 }


const Checkout = () => {
  return (
    <button onClick={orderHandler} className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  rounded bg-[#2c698d]'>checkout</button>
  )
}

export default Checkout