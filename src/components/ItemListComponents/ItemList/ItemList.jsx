import { Item } from "../Item/Item"
import './itemList.scss'

const ItemList =({products})=> {

 
    return (
        <div className="item-list">
            {products.map( (product, index) => {
                const mountingDelay = (index + 1) * 0.03;

                return <Item 
                    key={product.id}
                    product={product} 
                    mountingDelay={mountingDelay}    
                /> 
            })}
        </div>
    )
}

export {ItemList}