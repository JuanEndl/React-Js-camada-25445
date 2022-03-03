
import'./ItemList.css'
import ItemList from './ItemList';
import useFethc from './useFetch';




const ItemListContainer = () => {


  const {products} = useFethc('https://run.mocky.io/v3/8c59c4c5-9e0c-431b-a776-5926a58c7add')
  console.log(products)
  



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
        :<p className='loader'></p>
      }
    </section>
  )
}

export default ItemListContainer