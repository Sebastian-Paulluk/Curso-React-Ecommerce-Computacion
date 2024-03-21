import { useEffect, useState } from 'react';
import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import { ImageList } from '../ImageList/ImageList';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss'

const ItemDetail =({id, title, description, stock, images, price})=> {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const visibility = useMountingAnimation();

    const handleImageClick =(image)=>{
        setSelectedImage(image);
    }

    return (
        <div className={`item-detail ${visibility ? '' : 'hidden'}`}>
            <div className='item-detail__image-list-container'>
                <ImageList images={images} onClick={handleImageClick}/>
            </div>
            <div className='item-detail__img-container'>
                <img src={selectedImage} alt={title}></img>
            </div>
            <div className='item-detail__right-container'>
                <div className='item-detail__right-container__info-container'>
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
                <div className='item-detail__right-container__count-container'>
                    <ItemCount initialState={1} stock={stock} />
                </div>
            </div>
        </div>
    )
}

export {ItemDetail};