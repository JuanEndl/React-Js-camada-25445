


import ItemList from './ItemList';
import useFethc from './useFetch';
import { useParams } from 'react-router-dom';



import './ItemList.css';



const ItemListContainer = () => {

    const {category} = useParams ()
    console.log(category)
    
    
	const { products } = useFethc('https://6221a7deafd560ea69b604a9.mockapi.io/objetos');
	
    const filterCategory = products.filter(products => products.category === category) 
    console.log(filterCategory)

//filtro y .map a itemList

	return (
    <>

    <div className='todo'>
        <section className="filters">
            <label className="control control-checkbox">
                    Todos
                    <input type="checkbox"/>
                <div className="control_indicator"></div>
            </label>
            <div className="control-group"></div>
            <label className="control control-checkbox">
                    Mother
                    <input type="checkbox"/>
                <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
                    Memoria Ram
                    <input type="checkbox"/>
                <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
                    Fuente
                    <input type="checkbox"/>
                <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
                    Placa de Video
                    <input type="checkbox"/>
                <div className="control_indicator"></div>
            </label>
            <label className="control control-checkbox">
                    Procesador
                    <input type="checkbox"/>
                <div className="control_indicator"></div>
            </label>
        </section>




		<section className="cardForm">
			{products.length ? (
				products.map((product) => {
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
    </div>
    </>
	);
};

export default ItemListContainer;
