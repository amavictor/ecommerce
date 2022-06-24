import {createContext, useContext, useEffect, useState} from "react";

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: ()=> {},
    cartItems: [],
    addItemToCart:()=>{},
    cartCount:0
 }
)
//function for adding items to cart
const addCartItem = (cartItems, productToAdd ) => {
    //check for existing item of same product
    const existingItem = cartItems.find((cartItem)=>
    cartItem.id === productToAdd.id)
    if(existingItem){
        return cartItems.map((cartItem)=>
        cartItem.id === productToAdd.id
            ?{...cartItem,quantity:cartItem.quantity + 1}
            :
            cartItem
        )
    }
    return [...cartItems, {...productToAdd,quantity:1}]

}

export const CartProvider=({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] =useState(0)
    const value = {isCartOpen, setIsCartOpen, addItemToCart,cartItems,cartCount}

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])

    function addItemToCart (productToAdd){
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}