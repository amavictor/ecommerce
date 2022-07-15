import {useContext, useState} from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithPopUp
} from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-in-form.component.scss'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";


const defaultFormField = {
    email: '',
    password:''
}
//this is the best method for handling forms that have common input tags

const SignInForm = () =>{
    const[formField, setFormField] = useState(defaultFormField)
    const {email, password} = formField

    //you'll need the values that you'll be sending to the context for use
   /* const {setCurrentUser} = useContext(UserContext)*/


    const resetFormFields = ()=>{
        setFormField(defaultFormField)
    }

    const signInWithGoogle = async()=>{
        await signInWithPopUp();
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormField({...formField, [name]:value})

    }
    /*I need the name attribute so that I can identify which input that is trigering the change*/

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const {user}= await signInAuthUserWithEmailAndPassword(email,password)
            resetFormFields()
        }

        catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('incorrect password')
                    break;
                case 'auth/user-not-found':
                    alert('user does not exist')
                    break;
                default: console.log(e)
            }

        }


    }
    return(
        <div className={'sign-up-container'}>
            <h2> Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput
                    label={'email'}
                    type={'email'}
                    onChange={handleChange}
                    name={'email'}
                    value={email}
                    required

                />

                <FormInput
                    label={'password'}
                    type={'password'}
                    onChange={handleChange}
                    name={'password'}
                    value={password}
                    required

                />
                <div className={'buttons-container'}>
                    <Button type={"submit"} >Sign in</Button>
                    <Button type={'button'} buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google sign in</Button>

                </div>


            </form>
        </div>
    )
}
export default SignInForm