import { Button } from 'antd';
import './SuccessfulPurchase.scss';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext';

const SuccessfulPurchase =({idOrder})=>{
    const {emptyCart} = useContext(CartContext);
    
    useEffect(()=>{
        emptyCart();
    },[])

    return (
        <div className='successful-purchase-content'>
            <span className='first-line'>¡Compra realizada con éxito!</span>
            <span className='second-line'>Muchas gracias</span>
            <span>Número de orden de la compra:</span>
            <span>{idOrder}</span>
            <Link to='/'>
                <Button
                    type="primary"
                    className="return-to-home-button"
                    style={{width:150, height:40, fontSize:16}}
                >
                    Volver al inicio
                </Button>
            </Link>
        </div>
    )
}

export {SuccessfulPurchase};