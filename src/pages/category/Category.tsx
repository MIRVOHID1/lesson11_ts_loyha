import CategoryBanner from "./category-banner/CategoryBanner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryProducts from './category-products/CaregoryProducts'

const Category = () => {
    interface Product {
        id: number;
        images: string[];
        products: any;
        category: any;
    }

    const [ products, setProducts ] = useState<Product | null>(null)
    const { product_id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${product_id}/`)
            .then(response => response.json())
            .then(data => setProducts(data))  
    }, [])

    console.log(product_id)
    return (
        <div>
            {products && <CategoryBanner products={products.products}/>}
            {products && <CategoryProducts products={products.products}/>}
        </div>
    );
}

export default Category;