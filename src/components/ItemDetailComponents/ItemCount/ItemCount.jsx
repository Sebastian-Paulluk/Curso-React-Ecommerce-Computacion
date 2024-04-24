import { useContext, useState } from "react"
import { Button } from 'antd';
import React from 'react';
import './ItemCount.scss'
import Swal from 'sweetalert2'
import { CartContext } from "../../../context/CartContext";

const ItemCount =({product})=>{
    const [quantity, setQuantity] = useState(1)

    const {addProduct} = useContext(CartContext)

    const increment =()=>{
        quantity < product.stock && setQuantity(quantity + 1)
    }

    const decrement =()=>{
        quantity > 1 && setQuantity(quantity - 1)
    }

    const addToCart =product=>{
        addProduct(product, quantity);
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,

      });

    return (
        <div className="item-count">
            <div className="available-stock">Stock: {product.stock} unidades</div>
            <div className="item-count__controls">
                <Button type="default" className="decrement-button" onClick={decrement}>-</Button>
                <span className="number-of-items">{quantity}</span>
                <Button type="default" className="increment-button" onClick={increment}>+</Button>
            </div>
            <div className="item-count__add-to-cart-button-container">
                <Button type="primary" 
                    className="add-to-cart-button"
                    onClick={()=> {
                        addToCart(product)
                        Toast.fire({
                            icon: "success",
                            title: "Producto agregado al carrito"
                          });
                    }}
                >
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export {ItemCount}