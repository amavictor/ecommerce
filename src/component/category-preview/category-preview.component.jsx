import './category-preview.styles.scss'
import ProductCard from "../product-card/product-card.component";
import {Link} from "react-router-dom";

export default function CategoryPreview ({title, products}){
    return(
        <div className={'category-preview-container'}>
            <h2>
                <Link className={'title'} to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className={'preview'}>
                {
                    //the underscore means we don't wnat to use ths callback
                    products.filter((_,index)=> index<4)
                        .map((product)=> <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}