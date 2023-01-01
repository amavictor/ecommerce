import {initializeApp} from "firebase/app";
import {getAuth,
    createUserWithEmailAndPassword,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'
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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithPopUp = ()=> signInWithPopup(auth, googleProvider)
export const firebaseDatabase = getFirestore()
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider)


//initializing firestore and database
export const db =getFirestore()
//function for adding data
export const addCollectionAndDocuments= async (collectionKey, objectsToAdd)=>{
    //colectionKey is the name of the category. PS: check firebase for structure
    const collectionRef = collection(db,collectionKey)
    //write batch makes transactions go through just like a bank
    /*Yihua: 1000 => 900
    -100
    Zara: 1000 => 1100
    +100*/
    //write batch will help us do things like this
    const batch = writeBatch(db)//instantiating the batch to use our db instance
    //batch allows us to pass add the writes and read and overwrite and all that
    //It is only when we fire up the batch that the transaction will begin
    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef,object.title.toLowerCase())
        batch.set(docRef, object)
    })
    await batch.commit()
    console.log('done')
}

export const getCategoriesAndDocuments = async()=>{
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}



export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) =>{
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
                createdAt,
                ...additionalInformation
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return userDocRef
}
//email amd password sign in
export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password)
        return

 return createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password){
        alert('Please fill the fields')
    }
    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async ()=> await signOut(auth)

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth,callback)
//this above is the observer of the onAuthStat change