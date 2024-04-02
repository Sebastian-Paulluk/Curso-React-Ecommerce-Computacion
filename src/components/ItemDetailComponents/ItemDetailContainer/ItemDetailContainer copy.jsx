import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../../products/getProducts"
import './ItemDetailContainer.scss'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { SectionsHeader } from "../../SectionsHeaderComponents/SectionsHeader/SectionsHeader"
import { Spin } from "antd"


const ItemDetailContainer =()=> {
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(()=> {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
                setIsLoading(false)
            })
            .catch(error => console.error(error)) 

        return ()=> setIsLoading(true)
    }, [itemId])

    return (
        <div className={`item-detail-container ${isLoading ? 'loading' : ''}`}>
            {isLoading ? 
                <Spin size="large"/> :
                <>
                    {product && <SectionsHeader {...product} orderBy={false} />}
                    {product && <ItemDetail {...product}/>}
                </>
            }

        </div>
    )
}

export {ItemDetailContainer};