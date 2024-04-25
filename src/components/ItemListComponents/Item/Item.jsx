import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import './item.scss';
import { Link } from 'react-router-dom';
import cartImg from '../../../assets/images/cartImgGreen.png'
import heartImg from '../../../assets/images/item-heart-filled.png'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { WishlistContext } from '../../../context/WishlistContext';

const Item =({product, mountingDelay})=> {
    const visibility = useMountingAnimation(mountingDelay);
    const {productInCart} = useContext(CartContext);
    const {productInWishlist} = useContext(WishlistContext);
    const {id, title, images, price, stock} = product;

    return (
        <Link to={`/item/${id}`} className='Option'>
            <div className={`item ${visibility ? '' : 'hidden'}`}>
                <div className='item__img-container'>
                    <img src={images[0]} alt={title} className="item-img"></img>
                </div>
                <div className='item__title'>{title}</div>
                <div className='item__price'>$ {price.toLocaleString()}</div>
                <div className={`no-stock-icon-container ${stock != 0 ? 'hidden' : ''}`}>
                    <span>SIN STOCK</span>
                </div>
                <div className='state-container'>
                    <div
                        className={`in-cart-icon ${productInCart(product) ? '' : 'hidden'}`}
                    >
                        <img
                            src={cartImg}
                            alt="cart-icon" 
                            title='Producto en carrito'
                        ></img>
                    </div>
                    <div
                        className={`in-wishlist-icon ${productInWishlist(product) ? '' : 'hidden'}`}
                    >
                        <img
                            src={heartImg}
                            alt="heart-icon" 
                            title='Producto en favoritos'
                        ></img>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export {Item}