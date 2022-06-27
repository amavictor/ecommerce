import {createContext, useContext, useEffect, useState} from "react";

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: ()=> {},
    cartItems: [],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    cartCount:0,
    clearItemFromCart:()=>{},
    cartTotal:0
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

function removeCartItem (cartItems, cartItemToRemove){
    const existingItem = cartItems.find((cartItem)=>
        cartItem.id === cartItemToRemove.id)
    if(existingItem.quantity===1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map((cartItem)=>
        cartItem.id === cartItemToRemove.id
            ?{...cartItem,quantity:cartItem.quantity - 1}
            :
            cartItem
    )
}

const clearCartItem=(cartItems,cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)


export const CartProvider=({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] =useState(0)
    const [cartTotal,setCartTotal]=useState(0)
    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    }

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total + cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])
    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=>total + cartItem.quantity * cartItem.price,0)
        setCartTotal(newCartTotal)
    },[cartItems])

    function addItemToCart (productToAdd){
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    function removeItemFromCart (cartItemToRemove){
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }
    function clearItemFromCart (cartItemToClear){
        setCartItems(clearCartItem(cartItems,cartItemToClear))
    }

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}