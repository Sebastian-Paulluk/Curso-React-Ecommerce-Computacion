import { useContext, useEffect, useState } from 'react';
import cartImg from '../../../assets/images/cartImg.png'
import { Badge } from 'antd';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.scss';

const CartWidget =()=>{
    const {cart, emptyCart} = useContext(CartContext);
    const [count, setCount] = useState(cart.length);

    useEffect(()=>{
        setCount(cart.length)
    },[cart])
    
    return (
        <div className='cart-widget'>
            <Link to='/cart'>
                <Badge count={count}>
                    <img src={cartImg} className='cart-img' alt="Cart"></img>
                </Badge>
            </Link>
        </div>
    )
}

export { CartWidget };