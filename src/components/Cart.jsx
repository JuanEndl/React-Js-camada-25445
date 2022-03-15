import React from 'react'
import useFetch from './useFetch';
import { useParams } from 'react-router-dom'






const Cart = () => {

  const {id} = useParams()

  const {products: product} = useFetch(`https://6221a7deafd560ea69b604a9.mockapi.io/objetos/${id}`)

 console.log(product)


  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Resumen de compra</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
        {product.length ? (
				product.map((product) => { 
					return (
          <tr >
            <td className="px-4 py-3">{product.id}</td>
            <td className="px-4 py-3">{product.categoty}</td>
            <td className="px-4 py-3">{product.price}</td>
            <td className="px-4 py-3 text-lg text-gray-900">{product.id}</td>
          </tr>
					);
				})
			) : (
				<p className="loader" />
			)}
        </tbody>
      </table>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Comprar</button>
    </div>
  </div>
</section>
  )
}

export default Cart