import { useEffect, useState } from "react";
import { getProductByCategory, getProductByCategoryAndBrand, getProducts } from "../../../products/getProducts";
import { ItemList } from "../ItemList/ItemList";
import './itemListContainer.scss'
import { useParams } from "react-router-dom";
import { ItemPath } from "../../ItemPath/ItemPath";

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])

    const { categoryId, brand } = useParams()


    useEffect(()=>{
        // se se establece la funcion que filtrara a los productos.
        // por defecto, será la funcion que nos trae a todos los productos.
        let asyncFunc = getProducts

        if (brand !== undefined) { 
        // si se eligió una marca, se filtrará la base de datos
        // por categoria y por marca.
            asyncFunc = getProductByCategoryAndBrand 
        } else if (categoryId !== undefined) {
        // si se eligió una categoria pero no una marca, se filtrará
        // a la base de datos de los productos solamente por categoria.
            asyncFunc = getProductByCategory
        } 

        asyncFunc(categoryId, brand)
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    },[categoryId, brand])

    return (
        <div className='item-list-container'>
            <ItemPath category={categoryId} brand={brand}/>
            <ItemList products={products}/>
        </div>
    )
}


export { ItemListContainer }