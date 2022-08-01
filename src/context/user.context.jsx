import {createContext, useEffect, useReducer, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener, signOutUser} from "../utils/firebase/firebase.utils";


//basically how context works, you will need a context
/*context is used to store values or states that components at any point
in your code might want to access.
    The context has two parts:
1. the actual storage place for the states or whatever
2. the provider that is a component that you will use to wrap around
elements that need to access the context*/

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) =>
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user });

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*
const userReducer =(state,action)=>{
    return{
        /!*change the state with the action*!/
        currentUser:null
    }
}*/
