
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";
import {useState} from "react";



const defaultFormField = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
}
//this is the best method for handling forms that have common input tags
const SignUpForm = () =>{
    const[formField, setFormfield] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formField

    const resetFormFields = ()=>{
        setFormfield(defaultFormField)
    }
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormfield({...formField, [name]:value})
    }
    //the above is done to handle mutiple input changes based on the name.
    /*I need the name attribute so that I can identify which input that is trigering the change*/
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(password!== confirmPassword){
            alert('Password does not match')
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        }
        catch (e) {
            if(e.code === 'auth/email-already-in-use') {
                alert("User Already exists")
            }
            else{
                console.log('user creation encountered an error', e)
            }
        }
    }
    return(
        <div className={'sign-up-container'}>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
               {/* <FormInput
                    label={"Display name"}
                    inputOptions ={{
                        type: 'text',
                        onChange: 'handleChange',
                        name: 'displayName',
                        value: 'displayName',
                        required: true
                    }
                    }
                />//another way to do it*/}
                <FormInput
                    label={"Display name"}
                    type={'text'}
                    onChange={handleChange}
                    name={'displayName'}
                    value={displayName}
                    required
                />
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
                 <FormInput
                    label={'Confrim password'}
                    type={'password'}
                    onChange={handleChange}
                    name={'confirmPassword'}
                    value={confirmPassword}
                    required
                 />

                <Button type={"submit"} >Sign up</Button>
            </form>
        </div>
    )
}
export default SignUpForm