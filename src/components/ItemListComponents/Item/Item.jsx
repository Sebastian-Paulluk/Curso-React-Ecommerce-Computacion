import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import './item.scss';
import { Link } from 'react-router-dom';
import cartImg from '../../../assets/images/cartImgGreen.png'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const Item =({product, mountingDelay})=> {
    const visibility = useMountingAnimation(mountingDelay);
    const {productInCart} = useContext(CartContext);
    const {id, title, description, stock, images, price} = product;

    return (
        <Link to={`/item/${id}`} className='Option'>
            <div className={`item ${visibility ? '' : 'hidden'}`}>
                <div className='item__img-container'>
                    <img src={images[0]} alt={title} className="item-img"></img>
                </div>
                <div className='item__title'>{title}</div>
                <div className='item__price'>$ {price.toLocaleString()}</div>
                <div
                    className={`in-cart-icon ${productInCart(product) ? '' : 'hidden'}`}
                >
                    <img
                        src={cartImg}
                        alt="cart-icon" 
                        title='Producto en carrito'
                    ></img>
                </div>
                
            </div>
        </Link>
    )
}

export {Item}