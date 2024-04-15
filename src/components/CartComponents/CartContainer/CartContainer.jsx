import { useContext } from 'react';
import { Cart } from '../Cart/Cart';
import './CartContainer.scss';
import { CartContext } from '../../../context/CartContext';
import { EmptyCartButton } from './EmptyCartButton/EmpytCartButton';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const CartContainer =()=>{
    const {isCartEmpty} = useContext(CartContext);

    
    return (
        <div className={`cart-container`}>
            <div className='cart-container__title-container'>
                <div className='title-content'>
                    <div className='title-content__title'>Carrito</div>
                    {!isCartEmpty() && <EmptyCartButton />}
                </div>
            </div>
            {   
                isCartEmpty() ? 
                    <div className='empty-cart'>
                        <span className='empty-cart-warning'>No hay productos en el carrito</span> 
                        <Link to='/'>
                            <Button
                                type="primary"
                                className="return-to-home-button"
                                style={{width:150, height:40, fontSize:16}}
                            >
                                Ir al inicio
                            </Button>
                        </Link>
                    </div>
                    
                    :
                    <Cart />
            }
        </div>
    )
}

export { CartContainer }