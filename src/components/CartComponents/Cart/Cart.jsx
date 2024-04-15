import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"
import { Button } from 'antd';
import './Cart.scss';
import { Link } from "react-router-dom";

const Cart =()=>{
    const {cart, getTotalPrice} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(getTotalPrice());

    useEffect(()=>{
        setTotalPrice(getTotalPrice());
    },[cart])

    return (
        <div className="cart">

            {cart.map( (product, index) => {
                const mountingDelay = (index + 1) * 0.05;
                
                return <CartItem
                    key={product.id}
                    product={product}
                    mountingDelay={mountingDelay}
                />

            })}

            <div className="cart__total-price-container">
                <span className="total-price">Total: $ {totalPrice.toLocaleString()}</span>
                <Link to='/checkout'>
                    <Button
                        type="primary"
                        className="pay-button"
                        style={{width:150, height:40}}
                    >
                        Continuar
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export {Cart}