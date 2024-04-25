import { useContext, useState } from 'react';
import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import { ImageList } from '../ImageList/ImageList';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss'
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { WishedItemButton } from '../WishedItemButton/WishedItemButton';

const ItemDetail =({product})=> {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const visibility = useMountingAnimation();
    const {productInCart} = useContext(CartContext);

    const handleImageClick =(image)=>{
        setSelectedImage(image);
    }


    return (
        <div className={`item-detail ${visibility ? '' : 'hidden'}`}>
            <div className='item-detail__image-list-container'>
                <ImageList images={product.images} onClick={handleImageClick}/>
            </div>
            <div className='item-detail__img-container'>
                <img src={selectedImage} alt={product.title}></img>
            </div>
            <div className='item-detail__right-container'>
                <div className='item-detail__right-container__info-container'>
                    <div className='item-title'>{product.title}</div>
                    <div className='item-description'>{product.description}</div>
                    <div className='item-price'>$ {product.price.toLocaleString()}</div>
                    <WishedItemButton product={product} />
                </div>
                <div className='item-detail__right-container__count-container'>
                    {
                        product.stock === 0 ? (
                            <>
                                <span className='prod-in-cart-warning'>No hay stock disponible de este producto.</span>
                                <Link to="/">
                                    <Button type="primary" style={{width:150}} className='button'>Seguir comprando</Button>
                                </Link>
                            </>
                        ) : productInCart(product) ? (
                            <>
                                <span className='prod-in-cart-warning'>El producto ya se encuentra en el carrito.</span>
                                <Link to="/cart">
                                    <Button type="default" style={{width:150}}  className='button'>Ver en carrito</Button>
                                </Link>
                                <Link to="/">
                                    <Button type="primary" style={{width:150}} className='button'>Seguir comprando</Button>
                                </Link>
                            </>
                    
                        ) : (
                            <ItemCount product={product}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export {ItemDetail};