import './category.styles.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../../component/product-card/product-card.component";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";
import Spinner from "../../component/spinner/spinner.componenet";

export default function Category(){
    const {category} =useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])




    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category, categoriesMap])

    return(
        <>
            <h2 className={'category-title'}>{category.toUpperCase()}</h2>
            {
                isLoading ? <Spinner/>
                    :
                <div className={'category-container'}>
                    {products &&
                        products.map((product)=>(<ProductCard key={product.id} product={product}/> ))
                    }
                </div>
            }

        </>

    )
}