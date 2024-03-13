import { Item } from "../Item/Item"
import './itemList.scss'

const ItemList =({products})=> {
    return (
        <div className="item-list">
            {products.map( product =>{
                return <Item key={product.id} {...product} /> 
            })}
        </div>
    )
}

export {ItemList}