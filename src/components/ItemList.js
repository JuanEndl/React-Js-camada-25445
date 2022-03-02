import React from 'react';

const ItemList = ({ product }) => {
	return (
		<>
		<article className='itemList'>
			<div className='ItemContainer'>
				<div className='cardContainer'>
					<div className='itemListImg'>
						<img className='itemImg' src={product.img}/>
					</div>
					<div className='itemListSet'>
						<div className='iltemListCategory'>
							<p>{product.category}</p>
						</div>
						<div>
							<h4>{product.name}</h4>
							<h2>${product.price}</h2>
						</div>
						<div className='btnSeeMore'>
							<button className='text-color btn'>Ver mas</button>
						</div>
					</div>
				</div>
			</div>
		</article>
		</>
	);
};

export default ItemList;
