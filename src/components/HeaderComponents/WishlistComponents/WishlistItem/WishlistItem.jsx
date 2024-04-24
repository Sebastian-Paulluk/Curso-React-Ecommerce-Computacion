import { Link } from "react-router-dom";
import './WishlistItem.scss';
import trashIcon from '../../../../assets/images/trash.png'
import { useContext } from "react";
import { WishlistContext } from "../../../../context/WishlistContext";
import styled from 'styled-components';


const StyledWishlistItemContainer  = styled.div`
color: black;
border: 1px solid #B6B6B6;
border-radius: 6px;
cursor: pointer;
margin-bottom: 10px;
display: flex;
justify-content: flex-start;
align-items: center;
height: 80px;
overflow: hidden;
transition: all 0.2s ease;

&:hover {
    box-shadow: 0px 0px 10px #B6B6B6;
    border-color: #1677ff;
}
`;

export const WishlistItem =({product, handleClose})=>{
    const {removeProductFromWishlist} = useContext(WishlistContext)

    const handleDeleteItemButtonClick =(product)=>{
        removeProductFromWishlist(product);
    }
    

    return (
        <div className="wishlist-item">
            <Link to={`item/${product.id}`}>
            <StyledWishlistItemContainer onClick={handleClose} className="item-container">
                <div className="wishlist-item__img-section">
                    <div className="wishlist-item__img-container">
                        <img src={product.images[0]}></img>
                    </div>
                </div>
                <div className="wishlist-item__title-section">
                    {product.title}
                </div>
                <div className="wishlist-item__item-delete-section">
                </div>
            </StyledWishlistItemContainer>
            </Link>
            <img
                src={trashIcon}
                alt='delete icon'
                className='item-delete-button'
                onClick={()=> handleDeleteItemButtonClick(product)}
            ></img>
        </div>
    )
}