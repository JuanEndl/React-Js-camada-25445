import { useEffect, useState } from "react";

const useFethc = (url) => {

    const urls = 'https://run.mocky.io/v3/8c59c4c5-9e0c-431b-a776-5926a58c7add'

    const [products, setProducts] = useState([]);


    useEffect(() => {
    
    fetch(url)
        .then(resp => resp.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err));
    
    
    }, [urls])

return{products}
}

export default useFethc