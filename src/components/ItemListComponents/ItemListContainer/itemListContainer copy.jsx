import { createContext, useContext, useEffect, useState } from "react";
import { getProductByCategoryAndBrand, getProductsByNameOrBrand } from "../../../products/getProducts";
import { ItemList } from "../ItemList/ItemList";
import './itemListContainer.scss'
import { useParams } from "react-router-dom";
import React from 'react';
import { ConfigProvider, FloatButton, Spin } from 'antd';
import { SectionsHeader } from "../../SectionsHeaderComponents/SectionsHeader/SectionsHeader";
import { sortProducts } from "../../../functions/sortProducts";
import { getProducts, getProductByCategory } from "../../../services/firebase";
import { PathContext } from "../../../context/PathContext";

export const ItemListContext = createContext();

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { routeParam1, routeParam2 } = useParams()
    const {changePathCategory, changePathBrand} = useContext(PathContext)

    let params = {
        category: routeParam1,
        brand: routeParam2,
        search: routeParam1 === 'search' && routeParam2
    }

    useEffect(() => {
        let asyncFunc = getProducts

        if (params.search !== false ) {
            asyncFunc = getProductsByNameOrBrand
        } else if (params.brand !== undefined) {
            asyncFunc = getProductByCategoryAndBrand
        } else if (params.category !== undefined) {
            asyncFunc = getProductByCategory
        }

        asyncFunc(params)
            .then(response => {
                setProducts(response)
                setIsLoading(false)
                changePathCategory(params.category)
                changePathBrand(params.brand)
                change
            })
            .catch(error => console.log(error))

        return () => setIsLoading(true)
    }, [routeParam1, routeParam2])


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
                        <ItemListContext.Provider
                            value={{
                                category: params.category,
                                brand: params.brand,
                                search: params.search,
                                handleOrderBy: handleOrderBy
                            }}
                        >
                            <SectionsHeader 
                                searchTitle={params.search && true}
                                orderBy={params.search && products.length === 0 ? false : true }
                            />
                        </ItemListContext.Provider>

                        {params.search && products.length === 0 ?
                            <div className="no-match">
                                <span className="no-match-warning">
                                    No se encontraron productos que coincidan con la búsqueda ({params.search})
                                </span>
                            </div>
                            :
                            <ItemList products={products}/>
                        }
                        
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBgElevated: '#85b7e2',
                                },
                            }}
                        >
                            <FloatButton.BackTop />
                        </ConfigProvider>
                    </>
                }
     
        </div>
    )
}


export { ItemListContainer }