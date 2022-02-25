import React from 'react';

const ItemList = ({ product }) => {
	return (
		<article className='itemList'>
			<div className='itemListImg'>
				<img className='itemImg' src={product.img}/>
			</div>
			<div className='iltemListDetail'>
				<p>{product.category}</p>
				<h4>{product.name}</h4>
				<h2>${product.price}</h2>
			</div>
		</article>
	);
};

export default ItemList;
