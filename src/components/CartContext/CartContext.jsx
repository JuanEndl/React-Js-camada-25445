
import { createContext } from "react"
import { useState } from "react";













const CartContext = createContext();

export function CartContextProvider({ children }) {
    
    
    
    const [producCart, setItemcard] = useState([])
    const [carrito, setcarrito] = useState(0)
    const [totalcarrito, settotalcarrito] = useState(0)
    
    console.log(totalcarrito)

    //////
    const sumar = (valor, multiplicador) => {
        return valor * multiplicador
    }

    //////
    ////// agregar producto + la cantidad
    function addItem (product, qty,) {
        
        if (insideShopCart(product.id)) {
            let index = producCart.findIndex(i => i.id === product.id)
            let productCopy = [...producCart]
            productCopy[index].qty += qty;            
            setcarrito(carrito + sumar(product.price, qty))
            console.log(productCopy[index].countPrice);
            setItemcard(productCopy)
            settotalcarrito(totalcarrito + qty)
        }
        else {
            let countPrice;
            countPrice = product.price * qty;
            const addproduct = {...product, qty, countPrice} // junta el producto entero con el qty y el countPrice
            setItemcard( [...producCart, addproduct] );  /// buscar lo que quiero del array de los productos
            settotalcarrito(totalcarrito + addproduct.qty)
            setcarrito(carrito + sumar(addproduct.price, addproduct.prodQty))
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
        settotalcarrito(0)
        setcarrito(0)
    }
    //////////// remover producto
    function removeItem(product){
        if(insideShopCart(product.id)){
            let index = producCart.findIndex(i => i.id === product.id)
            let productCopy = [...producCart]
            setcarrito(carrito - sumar(product.price, product.qty))
            settotalcarrito(totalcarrito - product.qty)
            productCopy.splice(index, 1)
            setItemcard(productCopy)
        }
    }

    /////////////
    
    
    
    
    

     /////////////////////////////////////////////
    return(

        <CartContext.Provider value={ { addItem, producCart, clearAll, addPrice, removeItem, clearAll, totalcarrito } }>
        
            {children}

        </CartContext.Provider>

    )



}

export default CartContext