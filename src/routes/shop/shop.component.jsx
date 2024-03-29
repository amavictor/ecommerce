import  './shop.styles.scss'
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCategoriesAsync} from "../../store/categories/category.action";

export default function Shop(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategoriesAsync())
    },[])

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path={':category'} element={<Category/>}/>
        </Routes>
    )

}
