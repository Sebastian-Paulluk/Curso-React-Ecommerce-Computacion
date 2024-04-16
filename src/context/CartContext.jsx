import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const isCartEmpty =()=> cart.length === 0;

    const addProduct =(productToAdd, quantity)=>{
        const productIndex = cart.findIndex(prodInCart => prodInCart.id === productToAdd.id);

        if (productIndex === -1) {
            setCart([...cart, {...productToAdd, quantity:quantity}]);
        } else {
            const updatedCart = [...cart];
            updatedCart[productIndex].quantity += quantity;
            setCart(updatedCart);
        }
    }

    const removeProduct =(productToRemove)=>{
        const productIndex = cart.findIndex(prodInCart => prodInCart.id === productToRemove.id);
        
        const updatedCart = [...cart];
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
    }

    const emptyCart =()=>{
        setCart([]);
    }

    const getTotalPrice =()=>{
        const totalPrice = cart.reduce((acum, prod) => acum + (prod.price * prod.quantity), 0);
        return totalPrice;
    }

    const productInCart =(product)=>{
        return cart.some( item => item.id === product.id)
    }

    const quantityOfUnitsInCart =(product)=> {
        const prodInCar = cart.find( prod => prod.id === product.id)
        return prodInCar.quantity;
    }

    const incrementUnits =(product)=>{
        const updatedCart = cart.map ( item =>{
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1}
            }
            return item;
        })
        setCart(updatedCart);
    }

    const decrementUnits =(product)=>{
        const updatedCart = cart.map ( item =>{
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity - 1}
            }
            return item;
        })
        setCart(updatedCart);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addProduct,
            removeProduct,
            emptyCart,
            isCartEmpty,
            getTotalPrice,
            productInCart,
            quantityOfUnitsInCart,
            incrementUnits,
            decrementUnits
        }}>
            {children}
        </CartContext.Provider>
    )
}