import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../products/getProducts";
import { ItemList } from "../ItemList/ItemList";
import './itemListContainer.scss'
import { useParams } from "react-router-dom";

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        const asynFunc = categoryId ? getProductByCategory : getProducts

        asynFunc(categoryId)
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    },[categoryId])

    return (
        <div className='item-list-container'>
            <ItemList products={products}/>
        </div>
    )
}


export { ItemListContainer }