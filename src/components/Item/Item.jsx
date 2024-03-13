import './item.scss';
import { Link } from 'react-router-dom';
import { useMountingAnimation } from '../Hooks/useMountingAnimation';
import { useEffect } from 'react';

const Item =({id, title, description, stock, image, price})=> {

    return (
        <Link to={`/item/${id}`} className='Option'>
            <div className={`item`}>
                <div className='item__img-container'>
                    <img src={image} alt={title}></img>
                </div>
                <div className='item__title'>{title}</div>
                <div className='item__description'>{description}</div>
                <div className='item__price'>$ {price}</div>
            </div>
        </Link>
    )
}

export {Item}