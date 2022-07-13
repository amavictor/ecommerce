import SHOP_DATA from '../../shop-data.js'
import { CategoriesContext} from "../../context/categories-context";
import {Fragment, useContext} from "react";
import ProductCard from "../../component/product-card/product-card.component";
import CategoryPreview from "../../component/category-preview/category-preview.component";

export default function CategoriesPreview(){
    const {categoriesMap} = useContext(CategoriesContext)//give me products from the product context
    //the useContext is used to access the product context
    return(
        <>
            {Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title]
                return (
                    <CategoryPreview key={title} title={title} products={products}/>
                )
            })}
        </>
    )
}
