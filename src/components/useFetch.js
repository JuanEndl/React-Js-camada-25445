import { useEffect, useState } from "react";

const useFethc = (url, category) => {

    const urls = 'https://6221a7deafd560ea69b604a9.mockapi.io/objetos'

    const [products, setProducts] = useState([]);


    
    
    useEffect(() => {
        
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if (category) {
                setProducts( data.filter (products => products.category == category))
            } else {
                setProducts(data)
            }
        })
        .catch(err => console.log(err));
    
    
    }, [urls])

return{products}
}

export default useFethc