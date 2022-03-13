
import { createContext , useState} from "react"

const CartContext = createContext();

export function CartContextProvider({ children }) {


    const [producCart, setItemcard] = useState([])


    function addItem (product, qty) {
    if (insideShopCart(product.id)) {
        let index = producCart.findIndex(i => i.id === product.id)
        let productCopy = [...producCart]
        productCopy[index].qty += qty;
        setItemcard(productCopy)
    }
    else {
        const addproduct = {...product, qty} // junta el producto entero con el qty
        setItemcard( [...producCart, addproduct] );  /// buscar lo que quiero del array de los productos
    }


}

    function insideShopCart(id){

        return  producCart.some( function(inside){
            return(inside.id === id)
        })
    }

    ////////////////////////////////////////////// limpiar carrito entero


    function clearAll () {
        setItemcard([])
    }

    /////////////////////////////////////////////

    return(

        <CartContext.Provider value={ { addItem, producCart, clearAll} }>
        
            {children}

        </CartContext.Provider>

    )



}

export default CartContext