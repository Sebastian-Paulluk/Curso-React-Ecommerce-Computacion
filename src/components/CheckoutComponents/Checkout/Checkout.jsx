import { Link } from "react-router-dom";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import './Checkout.scss';

const Checkout =()=>{
    return (
        <div className="check-out">
            <div className='check-out__title-container'>
                <div className='title-content'>
                    <div className='title-content__title'>
                        <Link to="/cart" className="cart-link">Carrito</Link>
                        <span className="separator">&gt;</span>
                        Checkout
                    </div>
                </div>
            </div>
            <CheckoutForm />
        </div>
    )
}

export {Checkout}