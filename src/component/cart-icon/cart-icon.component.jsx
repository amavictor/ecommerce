import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {useContext} from "react";
import {CategoriesContext} from "../../context/categories-context";
import {CartContext} from "../../context/cart-context";

export default function CartIcon(){
    const {isCartOpen, setIsCartOpen,cartCount} = useContext(CartContext)
    /*const{cartItems, setCartItems} = useContext(CartContext) this is an easier way to set count*/
    const toggleIsCartOpen = ()=> { console.log(isCartOpen);setIsCartOpen(!isCartOpen)}
    return(
        <div className={'cart-icon-container'} onClick={toggleIsCartOpen}>
            <ShoppingIcon className={'shopping-icon'}/>
            <span className={'item-count'}>{cartCount}</span>
        </div>
    )
}