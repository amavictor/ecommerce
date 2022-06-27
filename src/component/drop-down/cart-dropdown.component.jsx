import './cart-dropdown.styles.scss'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart-context";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";

export default function CartDropdown(){

    const{cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutHandler=()=>{
        return navigate('/checkout')
    }


    return(
        <div className={'cart-dropdown-container'}>
            <div className={'cart-items'}>
                {cartItems?.map((item)=>(
                    <CartItem key={item.id} cartItem={item}/>
                )) ?? []}
            </div>
            <Button buttonType={'inverted'} onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </div>
    )
}