import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import './CartItem.scss';
import { OptionsButton } from './OptionsButton/OptionsButton';
import { CartContext } from '../../../context/CartContext';
import { CartItemCount } from './CartItemCount/CartItemCount';

const CartItem =({product, mountingDelay})=>{
    const { title, images } = product;
    const visibility = useMountingAnimation(mountingDelay); 

    return (
        <div className={`cart-item ${visibility ? '' : 'hidden'}`}>
            <div className='cart-item__img-container'><img src={images[0]}></img></div>
            <div className='cart-item__title-container'>
                <span className='title'>{title}</span>
            </div>
            <CartItemCount product={product} />
            <div className='cart-item__price'>
                <span className='price'>$ {(product.price * product.quantity).toLocaleString()}</span>
                <span className='subtotal'> Precio unitario: $ {product.price.toLocaleString()}</span>
            </div>
            <OptionsButton product={product} />
        </div>
    )
};

export {CartItem};