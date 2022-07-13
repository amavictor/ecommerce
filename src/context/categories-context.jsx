import SHOP_DATA from '../shop-data.js'
import {createContext, useContext, useEffect, useState} from "react";
import {addCollectionAndDocuments, getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap:{}, /*its an empty object because of the structure of the data
    the initial state is an empty object*/
})

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setCategoriesMap] = useState({})
    //use useEffect to fire up the products from the database when the project loads
    /*useEffect(()=>{
        addCollectionAndDocuments('categories', SHOP_DATA)
    },[])*/
    useEffect(()=>{
        //note: When you're getting using an async function in useEffect
        //do not call the async before the anonymous callback
        //rather create another function to call that is async


        /*in summary, whenever you want to use an async method in useEFfect,
        create an async function, assign the promise of the actual async function to a variable
        then call the function in the use effect like below*/

        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])
    const value ={categoriesMap}

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
