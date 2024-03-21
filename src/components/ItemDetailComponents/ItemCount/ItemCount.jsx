import { useState } from "react"
import './ItemCount.scss'

const ItemCount =({stock, initialState})=>{
    const [quantity, setQuantity] = useState(initialState)

    const increment =()=>{
        quantity < stock && setQuantity(quantity + 1)
    }

    const decrement =()=>{
        quantity > 1 && setQuantity(quantity + -1)
    }

    return (
        <div className="item-count">
            <div className="item-count__controls">
                <button className="decrement-button" onClick={decrement}>-</button>
                <span className="number-of-items">{quantity}</span>
                <button className="increment-button" onClick={increment}>+</button>
            </div>
            <div className="item-count__add-to-cart-button-container">
                <button className="add-to-cart-button">Agregar al carrito</button>
            </div>
        </div>
    )
}

export {ItemCount}