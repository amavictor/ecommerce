import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithRedirect,
signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD1bXH7nCus3ONlJ-K0nJuvtlqQo7PI1yE",
    authDomain: "shop-f0cb8.firebaseapp.com",
    projectId: "shop-f0cb8",
    storageBucket: "shop-f0cb8.appspot.com",
    messagingSenderId: "657401900607",
    appId: "1:657401900607:web:fcf29869ad50b4c847928a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})
export const auth = getAuth()
export const signInWithPopUp = ()=> signInWithPopup(auth, provider)
export const firebaseDatabase = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(firebaseDatabase, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    //checking if the snapshot exist and not existing.
    if(!userSnapshot.exists()){
        const{displayName, email} =userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return userDocRef
}