
import { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.scss'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { SectionsHeader } from "../../SectionsHeaderComponents/SectionsHeader/SectionsHeader"
import { Spin } from "antd"
import { getProductById } from "../../../services/firebase"
import { PathContext } from "../../../context/PathContext"

export const ItemDetailContext = createContext();

const ItemDetailContainer =()=> {
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()
    const { changePathCategory, changePathBrand, changePathTitle } = useContext(PathContext);

    useEffect(()=> {
        getProductById(itemId)
            .then(product => {
                setProduct(product)
                setIsLoading(false)

                changePathCategory(product.category)
                changePathBrand(product.brand)
                changePathTitle(product.title)
            })
            .catch(error => console.error(error)) 

        return ()=> setIsLoading(true)
    }, [itemId])

    return (
        <div className={`item-detail-container ${isLoading ? 'loading' : ''}`}>
            {isLoading ? (
                <Spin size="large"/>
            ) : (
                <>
                    {product && (
                        <>
                            <ItemDetailContext.Provider
                                value={{
                                    category: product.category,
                                    brand: product.brand,
                                    title: product.title
                                }}>
                                <SectionsHeader orderBy={false} />
                            </ItemDetailContext.Provider>
                            <ItemDetail product={product}/>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export {ItemDetailContainer};