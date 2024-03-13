import { useMountingAnimation } from '../Hooks/useMountingAnimation';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss'

const ItemDetail =({id, title, description, stock, image, price})=>{
    const visibility = useMountingAnimation()

    return (
        <div className={`item-detail ${visibility ? '' : 'hidden'}`}>
            <div className='item-detail__img-container'>
                <img src={image}></img>
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