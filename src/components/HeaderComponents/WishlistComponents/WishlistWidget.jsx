import './WishlistWidget.scss';
import heartImgEmpty from '../../../assets/images/wishlist-heart-empty.png'
import heartImgFilled from '../../../assets/images/wishlist-heart-filled.png'
import { useContext, useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { WishlistItem } from './WishlistItem/WishlistItem';
import { WishlistContext } from '../../../context/WishlistContext';


export const WishlistWidget =()=>{
    const [open, setOpen] = useState(false);
    const {wishlist, wishlistIsEmpty} = useContext(WishlistContext)
    const [wishlistEmpty, setWishlistEmpty] = useState(wishlistIsEmpty());

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    useEffect(()=>{
        setWishlistEmpty(wishlistIsEmpty())
    },[wishlist])

    return (
        <div className='wishlist-widget'>
            <img
                src={wishlistEmpty ? heartImgEmpty : heartImgFilled}
                onClick={showDrawer}
                className='wishlist-widget-img'
            ></img>
            <Drawer
                title="Favoritos"
                onClose={onClose}
                open={open}
                className='wishlist'
                style={{color: 'black'}}
            >
                {wishlistIsEmpty() ?
                    <h2 className='no-wished-items' style={{fontWeight: '400', paddingLeft: '20px'}}>No hay productos favoritos</h2> 
                    :
                    wishlist.map ( (item, index)=> {
                        return <WishlistItem product={item} key={index} handleClose={onClose}/>
                    })
                }
            </Drawer>
        </div>
    )
}