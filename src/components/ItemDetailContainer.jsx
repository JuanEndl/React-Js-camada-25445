
//Item detail conteiner 

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import useFetch from './useFetch';

import { useContext } from 'react';
import CartContext from './CartContext/CartContext';
import { Link } from 'react-router-dom';


const ItemDetailContainer = () => {

	const {id} = useParams()

	//useFetch reutilizable

	const {products: product} = useFetch(`https://6221a7deafd560ea69b604a9.mockapi.io/objetos/${id}`)

	const { addItem } = useContext(CartContext)

	const [inCard, setInCard] = useState(false)

	function addCart(qty){
		addItem(product, qty)
		setInCard(true)
	}


	return (
    <>
		<section className="itemListDetail">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
						<h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
						<h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
						{product.title}
						</h1>
						<div className="flex mb-4">
							<a className="flex-grow text-indigo-500 border-indigo-500 py-2 text-lg px-1 borderDescription">
								Description
							</a>
						</div>
						<p className="leading-relaxed mb-4">
                        {product.description}
						</p>
						<div className="flex border-t border-b mb-2 border-gray-200 py-2">
							<span className="text-gray-500">Stock</span>
							<span className="ml-auto text-gray-900">{product.stock}</span>
						</div>
						<div>
						{ inCard ?
							<Link to="/">
								<button className="mr-20  buttonBuy"> Ir al menu </button>
							</Link>
						: <></>
						}
						{ inCard ? 
						<Link to={`/cart/${product.id}`}>
							<button className=" ml-20  buttonBuy"> Terminar Compra </button>
						</Link>	
						: <ItemCount addCart={addCart} stock={product.stock}/>
						}
						</div>
					</div>
					<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded imgBorder" src={product.img} />
				</div>
			</div>
		</section>
    </>
	);
};

export default ItemDetailContainer;




