import { useMountingAnimation } from '../../Hooks/useMountingAnimation';
import './item.scss';
import { Link } from 'react-router-dom';

const Item =({id, title, description, stock, images, price, mountingDelay})=> {
    const visibility = useMountingAnimation(mountingDelay);

    return (
        <Link to={`/item/${id}`} className='Option'>
            <div className={`item ${visibility ? '' : 'hidden'}`}>
                <div className='item__img-container'>
                    <img src={images[0]} alt={title} className="item-img"></img>
                </div>
                <div className='item__title'>{title}</div>
                <div className='item__price'>$ {price.toLocaleString()}</div>
            </div>
        </Link>
    )
}

export {Item}