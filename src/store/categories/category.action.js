import {createAction} from "../../utils/reducer/reducer.utils";
import {CATEGORIES_ACTION_TYPES} from "./category.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const setCategories  =(categories) => createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories
)
export const fetchCategoriesStart =()=> createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
export const fetchCategoriesSuccess =(categoriesArray)=>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    )
export const fetchCategoriesFailed =(error)=> createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

//Thunk functions. I will be adding Async
export const fetchCategoriesAsync =()=> async (dispatch)=> {
    dispatch(fetchCategoriesStart())
    try {
        const categoriesArray = await getCategoriesAndDocuments('categories')
        dispatch(fetchCategoriesSuccess(categoriesArray))
    }
    catch (e) {
        dispatch(fetchCategoriesFailed(e))
    }

}