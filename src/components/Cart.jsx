import React from 'react'

import { useContext } from 'react';
import CartContext from './CartContext/CartContext';

import './cart.css';
import {VscTrash} from 'react-icons/vsc'
import trash from './assets/iconos/185-trash-bin-outline.png';
import { Link } from 'react-router-dom';




const Cart = () => {
  
  const  {producCart, addPrice, removeItem , clearAll, deleteOne, addOne }  = useContext(CartContext)

//////// crear una variable afuera del carrito para hacer el precio total
  let cart = {
      totalPrice: addPrice (producCart),
      //discount: this.totalPrice * 0.10,
      product: producCart
  }
///////////////



  return (
    <section  className="text-gray-600 body-font">
      <div className='grid grid-cols-2 m-12'>
        <div className='containeritems'>
            {
            producCart.length ? (
              producCart.map((i) => { 
                return (
                <>
                  <div key={i.id} className='cartUnity'>
                    <img className='sizeImgTasble'  src={i.img} alt='imagen'/>
                    <div className="px-2 py-3 max-w-xs" >{i.title}</div>
                    <button className="px-2 py-3 buttomPlusAndRest" onClick={()=>deleteOne(i.id)}> - </button>
                      <span className='px-2 py-3 '>{i.qty}</span>
                    <button className="px-2 py-3 buttomPlusAndRest" onClick={()=>addOne(i.id)}> + </button>
                    <div className="px-2 py-3">${i.countPrice}</div>
                    <div className="px-2 py-3">
                      <button onClick={()=>removeItem(i.id)}>
                        <VscTrash className="VscTrash"/>
                      </button>
                    </div>  
                  </div>
                </>
                );
              })
          ) : (
            <div >
              <p>carrito vacio !!!</p>
            </div>
          )
          }
        </div> 
        <div className="containerTotal">
          <div className="containerTotal">
            <div className="totalNumber">
                <div className="borderborder px-4 py-3 title-font font-medium text-gray-900 ">Resumen del carrito</div>
                <div className="  flex justify-between px-4 py-3 title-font  font-medium text-gray-900 text-sm bg-slate-300 rounded-tl rounded-bl">
                  <strong >Total: </strong>
                  <span className='flota'>$ {cart.totalPrice}</span>
                </div>
            </div>
          </div>
          <div className="containerButtoms">
              <div>
                <button className="buttonEmpy">
                  <VscTrash onClick={clearAll} src={trash} className="VscTrashTwo"/>
                </button>
              </div>
              <div>
                <Link to='/checkout'>
                  <button className=" buttonBuy text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  rounded bg-[#2c698d]">Comprar</button>
                </Link>
              </div>
            </div>
        </div>
      </div>
</section>
  )
}

export default Cart