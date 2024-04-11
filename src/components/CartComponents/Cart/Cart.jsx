import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"
import { Button } from 'antd';
import './Cart.scss';
import { Link } from "react-router-dom";

const Cart =()=>{
    const {cart, getTotalPrice} = useContext(CartContext)

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
                <span className="total-price">Total: ${getTotalPrice().toLocaleString()}</span>
                <Link to='/checkout'>
                    <Button type="primary" className="pay-button">Continuar</Button>
                </Link>
            </div>
        </div>
    )
}

export {Cart}