import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"
import './Cart.scss';

const Cart =()=>{
    const {cart} = useContext(CartContext)

    return (
        <div className="cart">
            {cart.map( product => {
                return <CartItem key={product.id} product={product} />
            })}
        </div>
    )
}

export {Cart}