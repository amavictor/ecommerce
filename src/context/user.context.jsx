import {createContext, useState} from "react";


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

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}