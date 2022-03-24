import React from 'react'
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import carrito from '../assets/iconos/carrito.png';







const CartWidget = () => {

	/*const {count, setcount} = useContext(CartContext)
	console.log(count)*/
	const {totalcarrito} = useContext(CartContext);
	console.log(totalcarrito)


	return (
    <>
    <div className="text-gray-700 text-center  px-4 py-2 m-2">
		<a href="#">
			<img className="shoppingCart" src={carrito} alt="carrito" />
		</a>
	</div>
	<div className="qty">{totalcarrito && <p className='cartQuantity'>{totalcarrito}</p>}</div>
    </>
	)
}

export default CartWidget