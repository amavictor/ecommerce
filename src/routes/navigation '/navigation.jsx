import {Link, Outlet} from 'react-router-dom'
import {CgShoppingCart} from "react-icons/all";
import {Fragment, useContext} from "react";

//you can import svgs as components
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.style.scss'
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/drop-down/cart-dropdown.component";
import {ProductsContext} from "../../context/product-context";
import {CartContext} from "../../context/cart-context";


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

    return(
        <Fragment>
           <div className={'navigation'}>
               <Link className={"logo-container"} to={"/"}>
                   <div><CrwnLogo/></div>
               </Link>

               <div className={'nav-links-container'}>
                   <Link className={"nav-link"} to={"/shop"}>
                       Shop
                   </Link>

                   {currentUser ? (
                       <span className={'nav-link'} onClick={signOutUser}>
                           {''}
                           Sign out {''}</span>) :(
                               <Link className={'nav-link'} to={'/auth'}>
                                   Sign In</Link>)
                   }
                   <CartIcon/>
               </div>
               {isCartOpen && <CartDropdown/>}

           </div>
            <Outlet/>
        </Fragment>

    )
}