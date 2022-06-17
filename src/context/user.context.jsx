import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener, signOutUser} from "../utils/firebase/firebase.utils";


//basically how context works, you will need a context
/*context is used to store values or states that components at any point
in your code might want to access.
    The context has two parts:
1. the actually storage please for the states or whatever
2. the provider that is a component that you will use to wrap around
elements that need to access the context*/

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null

})
export const UserProvider = ({children}) =>{
    const[currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}
    /*signOutUser()//the moment this userprovider mounts, I want you to sign out*/

    //i will be mounting the authstatechange here becuase Its better to
    //have it in a place where I'm already storing auth data
    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }

            setCurrentUser(user)
            console.log(user)
        })//stop listening
        return unsubscribe//clean up
    },[])//

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}