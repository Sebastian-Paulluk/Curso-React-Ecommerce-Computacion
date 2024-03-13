import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductById } from "../../products/getProducts"
import './ItemDetailContainer.scss'
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
            <ItemDetail {...product}/>
        </div>
    )
}

export {ItemDetailContainer};