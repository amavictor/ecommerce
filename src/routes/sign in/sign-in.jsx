import {createUserDocumentFromAuth, signInWithPopUp} from '../../utils/firebase/firebase.utils'

const SignIn = ()=>{

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
        </div>
    )
}
export default SignIn