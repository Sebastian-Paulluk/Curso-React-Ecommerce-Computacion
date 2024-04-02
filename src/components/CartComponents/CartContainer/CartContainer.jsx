import { useContext } from 'react';
import { Cart } from '../Cart/Cart';
import './CartContainer.scss';
import { CartContext } from '../../../context/CartContext';

const CartContainer =()=>{
    const {isCartEmpty} = useContext(CartContext);


    return (
        <div className={`cart-container`}>
            <div className='cart-container__title-container'>
                <div className='cart-container__title-container__title'>Carrito</div>
            </div>
            {   
                isCartEmpty() ? 
                    <div className='empty-cart'>
                        <span className='empty-cart-warning'>No hay productos en el carrito</span> 
                    </div>
                    :
                    <Cart />
            }
        </div>
    )
}

export { CartContainer }