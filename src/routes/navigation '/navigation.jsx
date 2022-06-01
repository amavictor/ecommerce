import {Link, Outlet} from 'react-router-dom'
import {CgShoppingCart} from "react-icons/all";
import {Fragment, useContext} from "react";

//you can import svgs as components
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.style.scss'
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";


export default function Navigation(){
    const {currentUser, setCurrentUser} = useContext(UserContext)
    //console.log(currentUser)

    //after signOut, the context doesn't know i've signed out so I ned to inform it
    //using this method

    const signOutHandler = async ()=>{
        await signOutUser()
        //we are getting the value of the signout
        setCurrentUser(null)
        //setting current user to null to remove the user from the context
    }

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

                   <div className={"nav-link"}>
                       {currentUser ? <span onClick={signOutHandler}>Sign out</span> : <Link className={'nav-link'} to={'/auth'}>Sign In</Link>}
                   </div>


               </div>

           </div>
            <Outlet/>
        </Fragment>

    )
}