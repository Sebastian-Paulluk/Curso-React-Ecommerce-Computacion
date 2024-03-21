import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../../products/getProducts"
import './ItemDetailContainer.scss'
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { ItemPath } from "../../ItemPath/ItemPath"


const ItemDetailContainer =()=> {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(()=> {
        getProductById(itemId)
            .then(response => setProduct(response))
            .catch(error => console.error(error)) 
    }, [itemId])

    return (
        <div className="item-detail-container">
            {product && <ItemPath {...product} />}
            {product && <ItemDetail {...product}/>}
        </div>
    )
}

export {ItemDetailContainer};