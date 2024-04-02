import { useEffect, useState } from 'react';
import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import { ImageList } from '../ImageList/ImageList';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss'

const ItemDetail =({product})=> {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const visibility = useMountingAnimation();

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
                </div>
                <div className='item-detail__right-container__count-container'>
                    <ItemCount product={product}/>
                </div>
            </div>
        </div>
    )
}

export {ItemDetail};