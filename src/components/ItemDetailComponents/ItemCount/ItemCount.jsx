import { useState } from "react"
import { Button } from 'antd';
import React from 'react';
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
            <div className="available-stock">Stock: {stock} unidades</div>
            <div className="item-count__controls">
                <Button type="default" className="decrement-button" onClick={decrement}>-</Button>
                <span className="number-of-items">{quantity}</span>
                <Button type="default" className="increment-button" onClick={increment}>+</Button>
            </div>
            <div className="item-count__add-to-cart-button-container">
                <Button type="primary" className="add-to-cart-button">Agregar al carrito</Button>
            </div>
        </div>
    )
}

export {ItemCount}