

//custom hook


import { useEffect, useState } from "react";

const useFetch = (url) => {

    const urls = 'https://6221a7deafd560ea69b604a9.mockapi.io/objetos'

    const [products, setProducts] = useState([]);


    
    
    useEffect(() => {
        
    fetch(url)
        .then(resp => resp.json())
        .then(data => setProducts( data))
        .catch(err => console.log(err));
    
    
    }, [urls])

return{products}
}

export default useFetch