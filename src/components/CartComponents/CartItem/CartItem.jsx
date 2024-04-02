import './CartItem.scss';
import { OptionsButton } from './OptionsButton/OptionsButton';


const CartItem =({product})=>{
    const {title, images, brand, description, stock, price} = product;

    return (
        <div className='cart-item'>
            <div className='cart-item__img-container'><img src={images[0]}></img></div>
            <div className='cart-item__title-container'>
                <span className='title'>{title}</span>
            </div>
            <OptionsButton product={product}/>
        </div>
    )
};

export {CartItem};