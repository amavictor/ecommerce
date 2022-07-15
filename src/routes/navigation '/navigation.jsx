import {Link, Outlet} from 'react-router-dom'
import {CgShoppingCart} from "react-icons/all";
import {Fragment, useContext} from "react";

//you can import svgs as components
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.style'
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/drop-down/cart-dropdown.component";
import {CategoriesContext} from "../../context/categories-context";
import {CartContext} from "../../context/cart-context";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.style";


export default function Navigation(){
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    //console.log(currentUser)

    //after signOut, the context doesn't know i've signed out so I ned to inform it
    //using this method

   /* const signOutHandler = async ()=>{
        await (signOutUser)
    }
*/
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}