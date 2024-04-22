import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({children}) =>{
    const [wishlist, setWishlist] = useState([]);


    
    const productInWishlist =(product)=>{
        const foundProduct = wishlist.find(prodInWishlist => prodInWishlist.id === product.id);
        return foundProduct !== undefined;
    }



    const wishlistIsEmpty =()=> {
        return wishlist.length === 0;
    }


    const removeProductFromWishlist =(productToRemove)=>{
        const productIndex = wishlist.findIndex(prodInWishlist => prodInWishlist.id === productToRemove.id);
        
        const updatedWishlist = [...wishlist];
        updatedWishlist.splice(productIndex, 1);
        setWishlist(updatedWishlist);
    }



    const toggleProductOnWishlist =(product)=>{

        if (!productInWishlist(product)) {
            setWishlist([...wishlist, product])
        } else {
            const productIndex = wishlist.findIndex(prodInWishlist => prodInWishlist.id === product.id);
        
            const updatedWishlist = [...wishlist];
            updatedWishlist.splice(productIndex, 1);
            setWishlist(updatedWishlist);
        }

    }




    return (
        <WishlistContext.Provider value={{
            wishlist,
            productInWishlist,
            wishlistIsEmpty,
            removeProductFromWishlist,
            toggleProductOnWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    )
}