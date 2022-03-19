


import ItemList from './ItemList';

import { getProducts } from "./firebase/firebaseClient"
/*import useFethc from './useFetch';*/
import { useParams } from 'react-router-dom';



import './ItemList.css';
import { useState, useEffect } from 'react';


const ItemListContainer = () => {

	
    

	const [productos, setproductos] = useState([])


	useEffect(() => {
	
		getProducts().then(data => {
			setproductos(data)
		})


		


	}, [])
	

    
    
    const {category} = useParams ()
    console.log(category)
    

	/* const { products } = useFethc('https://6221a7deafd560ea69b604a9.mockapi.io/objetos');*/

     let filterCategory = productos.filter(products => products.category === category) 
    console.log(filterCategory)
    

    if ( category
    ) {
            filterCategory = productos.filter(products => products.category === category) 
    } else {
        filterCategory = productos 
    }
 


//filtro y .map a itemList

	return (
    <>
		<section className="cardForm">
			{filterCategory.length ? (
				filterCategory.map((product) => { 
					return (
						<div key={product.id}>
							<ItemList product={product}/>
						</div>
					);
				})
			) : (
				<p className="loader" />
			)}
		</section>
    </>
	);
};

export default ItemListContainer;
