import { Button } from 'antd';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';
import './CartItemCount.scss';

export const CartItemCount =({product})=>{
    const {quantityOfUnitsInCart, incrementUnits, decrementUnits} = useContext(CartContext);

    const decrementUnitsInCart =()=>{
        quantityOfUnitsInCart(product) > 1 && decrementUnits(product);
    }
    
    const incrementUnitsInCart =()=>{
        quantityOfUnitsInCart(product) < product.stock && incrementUnits(product);
    }

    return (
        <div className="cart-item-count">
            <div className='container'>
                <div className="on-cart">Unidades:</div>
                <div className="item-count__controls">
                    <Button type="default" className="cart-item-decrement-button" onClick={decrementUnitsInCart}>-</Button>
                    <span className="number-of-items">{quantityOfUnitsInCart(product)}</span>
                    <Button type="default" className="cart-item-increment-button" onClick={incrementUnitsInCart}>+</Button>
                </div>
                <div className="available-stock">Stock: {product.stock}</div>
            </div>
        </div>
    )
}