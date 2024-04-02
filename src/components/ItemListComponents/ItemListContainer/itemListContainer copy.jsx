import { useEffect, useState } from "react";
import { getProductByCategory, getProductByCategoryAndBrand, getProducts } from "../../../products/getProducts";
import { ItemList } from "../ItemList/ItemList";
import './itemListContainer.scss'
import { useParams } from "react-router-dom";
import React from 'react';
import { ConfigProvider, FloatButton, Spin } from 'antd';
import { SectionsHeader } from "../../SectionsHeaderComponents/SectionsHeader/SectionsHeader";
import { sortProducts } from "../../../functions/sortProducts";

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { categoryId, brand } = useParams()


    useEffect(() => {
        let asyncFunc = getProducts

        if (brand !== undefined) {
            asyncFunc = getProductByCategoryAndBrand
        } else if (categoryId !== undefined) {
            asyncFunc = getProductByCategory
        }

        asyncFunc(categoryId, brand)
            .then(response => {
                setProducts(response)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

        return () => setIsLoading(true)
    }, [categoryId, brand])


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
                        <SectionsHeader category={categoryId} brand={brand} onClick={handleOrderBy}/>
                        <ItemList products={products}/>
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