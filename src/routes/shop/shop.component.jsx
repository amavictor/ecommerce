import SHOP_DATA from '../../shop-data.json'
import { ProductsContext} from "../../context/product-context";
import {useContext} from "react";
import ProductCard from "../../component/product-card/product-card.component";
import  './shop.styles.scss'

export default function Shop(){
    const {products} = useContext(ProductsContext)//give me products from the product context
    //the useContext is used to access the product context
    return(
        <div className={'products-container'}>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}
