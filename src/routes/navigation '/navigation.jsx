import {Link, Outlet} from 'react-router-dom'
import {CgShoppingCart} from "react-icons/all";
import {Fragment} from "react";

//you can import svgs as components
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.style.scss'


export default function Navigation(){
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
                   <Link className={"nav-link"} to={"/signIn"}>
                       Sign-in
                   </Link>
               </div>

           </div>
            <Outlet/>
        </Fragment>

    )
}