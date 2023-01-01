import {Outlet} from 'react-router-dom'
import {Fragment} from "react";

//you can import svgs as components
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.style'
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/drop-down/cart-dropdown.component";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.style";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";


export default function Navigation(){
   const currentUser =  useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
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