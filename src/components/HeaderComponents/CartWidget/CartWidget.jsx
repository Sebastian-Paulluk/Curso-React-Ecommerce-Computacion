import { useContext, useEffect, useState } from 'react';
import cartImg from '../../../assets/images/cartImg.png'
import { Badge } from 'antd';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.scss';

<link href="https://unpkg.com/boxicons@2.1.0/css/boxicons.min.css" rel="stylesheet"></link>
const CartWidget =()=>{
    const {totalQuantity, cart} = useContext(CartContext);
    const [count, setCount] = useState(totalQuantity);

    useEffect(()=>{
        setCount(totalQuantity)
    },[cart])
    
    return (
        <div className='cart-widget'>
            <Link to='/cart'>
                <Badge count={count} size="small" offset={[-3, 5]}>
                    <img src={cartImg} className='cart-img' alt="Cart"></img>
                </Badge>
            </Link>
        </div>
    )
}

export { CartWidget };