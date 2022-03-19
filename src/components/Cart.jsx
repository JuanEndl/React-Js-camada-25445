import React from 'react'

import { useContext } from 'react';
import CartContext from './CartContext/CartContext';




const Cart = () => {
  
  const  {producCart, addPrice, removeItem}  = useContext(CartContext)

////////////// crear una variable afuera del carrito para hacer el precio total
  let cart = {
      totalPrice: addPrice (producCart),
      //discount: this.totalPrice * 0.10,
      product: producCart
  }
///////////////


  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Resumen de compra</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">imagen</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Nombre</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Cantidad </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Precio</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Precio Total</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {
        producCart.length ? (
				producCart.map((i) => { 
					return (
          <>
          <tr>
            <img  key={i.id} className='sizeImgTasble' src={i.img} alt='imagen'/>
            <td className="px-4 py-3">{i.title}</td>
            <td className="px-4 py-3">{i.qty}</td>
            <td className="px-4 py-3">${i.price}</td>
            <td className="px-4 py-3">${i.countPrice}</td>
            <td className="px-4 py-3">${i.countPrice}</td>
            <td className="px-4 py-3">
              <button onClick={()=>removeItem(i.id)} className=" ml-20  buttonBuy"> Eliminar </button>
            </td>  
          </tr>
          </>
					);
				})
			) : (
				<p className="loader" />
			)}
      <th className=" justify-self-end px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">{cart.totalPrice}</th>
      <th className=" justify-self-end px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Total carrito</th>
        </tbody>
      </table>
      
      <div className='grid justify-items-stretch'>
      </div>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Comprar</button>
    </div>
  </div>
</section>
  )
}

export default Cart