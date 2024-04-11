import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import './CartItem.scss';
import { OptionsButton } from './OptionsButton/OptionsButton';


const CartItem =({product, mountingDelay})=>{
    const {title, images, brand, description, stock, price} = product;
    const visibility = useMountingAnimation(mountingDelay); 

    return (
        <div className={`cart-item ${visibility ? '' : 'hidden'}`}>
            <div className='cart-item__img-container'><img src={images[0]}></img></div>
            <div className='cart-item__title-container'>
                <span className='title'>{title}</span>
            </div>
            <OptionsButton product={product}/>
        </div>
    )
};

export {CartItem};