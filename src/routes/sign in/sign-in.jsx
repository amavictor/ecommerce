import {auth, createUserDocumentFromAuth, signInWithPopUp} from '../../utils/firebase/firebase.utils'
import {signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils';
import {getRedirectResult} from 'firebase/auth'
import {useEffect} from "react";

import SignUpForm from "../../component/sign-up/sign-up-form.component";


const SignIn = ()=>{

    //this is to enable the login so hold the data of login  instance
   /* useEffect(()=>{
        async function fetchData(){
            const response = await getRedirectResult(auth)
            console.log(response)
            //this is for generating new doc reference just like in pop up
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        fetchData()
    },[])
*/

    const logGoogleUser= async()=>{
        const {user} = await signInWithPopUp();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>I am a sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>

            <SignUpForm/>

            {/*<button onClick={signInWithGoogleRedirect}>
                Sign in with Google redirect
            </button>*/}
        </div>
    )
}
export default SignIn