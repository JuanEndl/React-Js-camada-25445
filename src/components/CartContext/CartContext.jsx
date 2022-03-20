
import { createContext , useState} from "react"

const CartContext = createContext();

export function CartContextProvider({ children }) {





    const [producCart, setItemcard] = useState([])
    
    //////////// remover producto
    function removeItem(id){
        if(producCart.length != 0){
            let index = producCart.findIndex(i => i.id === id)
            let productCopy = [...producCart]
            removeItemFromArr(productCopy,productCopy[index])
            setItemcard(productCopy)
        }
    }

    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
    /////////////

    ////// agregar producto + la cantidad
    function addItem (product, qty,) {
        
        if (insideShopCart(product.id)) {
            let index = producCart.findIndex(i => i.id === product.id)
            let productCopy = [...producCart]
            productCopy[index].qty += qty;            
            productCopy[index].countPrice = productCopy[index].price * productCopy[index].qty;
            console.log(productCopy[index].countPrice);
            setItemcard(productCopy)
        }
        else {
            let countPrice;
            countPrice = product.price * qty;
            const addproduct = {...product, qty, countPrice} // junta el producto entero con el qty y el countPrice
            setItemcard( [...producCart, addproduct] );  /// buscar lo que quiero del array de los productos
        }
    }

///////

    ////// agregar el total
    function addPrice (productCart){
        let total = 0;
        productCart.forEach(product => {total += product.countPrice});
        return total;
    }
    /////////

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

        <CartContext.Provider value={ { addItem, producCart, clearAll, addPrice, removeItem, removeItemFromArr, clearAll} }>
        
            {children}

        </CartContext.Provider>

    )



}

export default CartContext