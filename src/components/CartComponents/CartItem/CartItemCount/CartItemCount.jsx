import { Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';
import './CartItemCount.scss';
import { getSelectItems } from './getSelectItems';

export const CartItemCount =({product})=>{
    const {quantityOfUnitsInCart, updateUnits} = useContext(CartContext);
    const selectItems = getSelectItems(product);
    const [selectedValue, setSelectedValue] = useState(quantityOfUnitsInCart(product));

    const handleSelectChange = (event) => {
        const newValue = parseInt(event.target.value);
        setSelectedValue(newValue);
        updateUnits(product, newValue);
    }

    return (
        <div className="cart-item-count">
            Cantidad
            <select defaultValue={selectedValue} onChange={handleSelectChange}>
                {selectItems.map ( (item, key) => (
                    <option key={key} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}