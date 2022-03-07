


import ItemList from './ItemList';
import useFethc from './useFetch';
import { useParams } from 'react-router-dom';



import './ItemList.css';


const ItemListContainer = () => {


    
    
    const {category} = useParams ()
    console.log(category)
    
    
	const { products } = useFethc('https://6221a7deafd560ea69b604a9.mockapi.io/objetos');
	
    let filterCategory = products.filter(products => products.category === category) 
    console.log(filterCategory)
    

    if ( category
    ) {
            filterCategory = products.filter(products => products.category === category) 
    } else {
        filterCategory = products 
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
