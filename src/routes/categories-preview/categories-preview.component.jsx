import CategoryPreview from "../../component/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";
import Spinner from "../../component/spinner/spinner.componenet";

export default function CategoriesPreview(){
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    return(
        <>
            {
                isLoading
                    ?
                    <Spinner/>
                        :
                (

                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title]
                        return (
                            <CategoryPreview key={title} title={title} products={products}/>
                        )
                    })

                )
            }
        </>
    )
}
