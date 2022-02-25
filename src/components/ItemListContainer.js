import React, { useEffect, useState } from 'react'

import'./ItemList.css'
import ItemList from './ItemList';
const ItemListContainer = () => {



  const url = 'https://run.mocky.io/v3/8c59c4c5-9e0c-431b-a776-5926a58c7add'

  const [products, setProducts] = useState([]);


  useEffect(() => {
    
    fetch(url)
      .then(resp => resp.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
    
    
  }, [])
  



  return (
    <section className='cardForm'>
      {
        products.length ?

        (
          products.map( product => {
            return(
              <div key={product.id}>
                <ItemList product={product}/>
              </div>
            )
          })
        )
        :<p>cargando</p>
      }
    </section>
  )
}

export default ItemListContainer