import { createContext, useContext, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import './itemListContainer.scss'
import { Link, useParams } from "react-router-dom";
import React from 'react';
import { Spin, Button } from 'antd';
import { SectionsHeader } from "../../SectionsHeaderComponents/SectionsHeader/SectionsHeader";
import { sortProducts } from "../../../functions/sortProducts";
import { getProducts, getProductByCategory, getProductsByTitleBrandOrDescription, getProductByCategoryAndBrand } from "../../../services/firebase";
import { PathContext } from "../../../context/PathContext";

export const ItemListContext = createContext();

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {categoryId, brandId, searchedText} = useParams()
    const {changePathCategory, changePathBrand, resetPath} = useContext(PathContext)

    useEffect(() => {
        resetPath();

        let asyncFunc = getProducts
        let params 

        if (searchedText) {
            asyncFunc = getProductsByTitleBrandOrDescription
            params = searchedText
        } else if (brandId) {
            asyncFunc = getProductByCategoryAndBrand
            params = {category: categoryId, brand: brandId};
            changePathCategory(categoryId)
            changePathBrand(brandId)
        } else if (categoryId) {
            asyncFunc = getProductByCategory
            params = categoryId
            changePathCategory(categoryId)
        }

        asyncFunc(params)
            .then(response => {
                setProducts(response)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

        return () => setIsLoading(true)
    }, [categoryId, brandId, searchedText])


    const handleOrderBy =(orderOption)=> {
        const sortedProducts = sortProducts(products, orderOption);
        setProducts(sortedProducts); 
    }

    return (
        <div className={`item-list-container ${isLoading ? 'loading' : ''}`}>
                {
                    isLoading ?
                    <Spin size="large" /> : 
                    <>
                        <ItemListContext.Provider value={{handleOrderBy: handleOrderBy, searchedText: searchedText}}>
                            <SectionsHeader 
                                searchTitle={searchedText && true}
                                orderBy={searchedText && products.length === 0 ? false : true }
                            />
                        </ItemListContext.Provider>

                        {searchedText && products.length === 0 ?
                            <div className="no-match">
                                <span className="no-match-warning">
                                    No se encontraron productos que coincidan con la búsqueda ({searchedText})
                                </span>
                                <Link to='/'>
                                    <Button
                                        type="primary"
                                        className="return-to-home-button"
                                        style={{width:150, height:40, fontSize:16}}
                                    >
                                        Ir al inicio
                                    </Button>
                                </Link>
                            </div>
                            
                            :
                            <ItemList products={products}/>
                        }
                    </>
                }
     
        </div>
    )
}


export { ItemListContainer }