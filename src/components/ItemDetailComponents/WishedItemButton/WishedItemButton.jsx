
import { useContext, useEffect, useState } from 'react';
import heartImgEmpty from '../../../assets/images/item-heart-empty.png';
import heartImgFilled from '../../../assets/images/item-heart-filled.png';
import { WishlistContext } from '../../../context/WishlistContext';

export const WishedItemButton =({product})=> {
    const {wishlist, productInWishlist, toggleProductOnWishlist} = useContext(WishlistContext);
    const [wishState, setWishState] = useState(productInWishlist(product));


    useEffect(()=>{
        setWishState(productInWishlist(product));
    },[wishlist, product])

    const handleClick =(product)=>{
        toggleProductOnWishlist(product);
    }

    return (
        <img
            onClick={()=>handleClick(product)}
            src={wishState ? heartImgFilled : heartImgEmpty}
            alt='item wish icon'
            className='item-wish-icon'>
        </img>
    )
}