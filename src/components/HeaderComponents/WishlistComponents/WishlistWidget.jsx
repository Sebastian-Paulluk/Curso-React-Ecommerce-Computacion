import './WishlistWidget.scss';
import heartImgEmpty from '../../../assets/images/wishlist-heart-empty.png'
import heartImgFilled from '../../../assets/images/wishlist-heart-filled.png'
import { useContext, useEffect, useState } from 'react';
import { Drawer, Popconfirm } from 'antd';
import { WishlistItem } from './WishlistItem/WishlistItem';
import { WishlistContext } from '../../../context/WishlistContext';
import { Badge } from 'antd';
import trashIcon from '../../../assets/images/trash.png'

export const WishlistWidget =()=>{
    const [open, setOpen] = useState(false);
    const {wishlist, emptyWishlist, wishlistIsEmpty, totalQuantityWishedItems} = useContext(WishlistContext)
    const [count, setCount] = useState(totalQuantityWishedItems);
    const [wishlistEmpty, setWishlistEmpty] = useState(wishlistIsEmpty());

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };


    useEffect(()=>{
        setWishlistEmpty(wishlistIsEmpty())
        setCount(totalQuantityWishedItems)
    },[wishlist])
    

    const handleEmptyWishlistClick =()=>{
        emptyWishlist();
    }

    return (
        <div className='wishlist-widget'>
            <Badge count={count} size="small" offset={[-3, 5]}>
                <img
                    src={wishlistEmpty ? heartImgEmpty : heartImgFilled}
                    onClick={showDrawer}
                    className='wishlist-widget-img'
                ></img>
            </Badge>
            <Drawer
                title="Favoritos"
                onClose={onClose}
                open={open}
                className='wishlist'
                style={{color: 'black'}}
            >
               {
                    wishlistIsEmpty() ? (
                        <h2 className='no-wished-items' style={{fontWeight: '400', paddingLeft: '20px'}}>No hay productos favoritos</h2>
                    ) : (
                        <>
                            {wishlist.map((item) => (
                                <WishlistItem product={item} key={item.id} handleClose={onClose}/>
                            ))}

                            <Popconfirm
                                placement="bottomRight"
                                title="¿Eliminar todos los productos favoritos?"
                                okText="Si"
                                cancelText="No"
                                onConfirm={handleEmptyWishlistClick}
                            >
                                <div
                                    className='clear-wishlist-button'
                                    style={{fontWeight: '400', paddingLeft: '20px'}}
                                    
                                >
                                    Vaciar lista
                                    <img src={trashIcon} alt='trash-icon'></img>
                                </div>
                            </Popconfirm>

                        </>
                    )
                }
            </Drawer>
        </div>
    )
}