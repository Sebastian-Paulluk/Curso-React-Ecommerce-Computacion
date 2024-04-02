import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import './ItemPath.scss';
import { ItemDetailContext } from "../../ItemDetailComponents/ItemDetailContainer/ItemDetailContainer";
import { ItemListContext } from "../../ItemListComponents/ItemListContainer/itemListContainer";

const ItemPath =()=>{   
    const itemListContext = useContext(ItemListContext);
    const itemDetailContext = useContext(ItemDetailContext);
    const {category, brand, title} = itemListContext || itemDetailContext;

    const items = [
        {title:(
                <Link to={`/`} className='path-item'>Todos los productos</Link>
            )
        },
        category && {
            title:(
                <Link to={`/${category}`} className='path-item'>
                    {category}
                </Link>
            )
        },
        brand && {
            title:(
                <Link to={`/${category}/${brand}`} className='path-item'>
                    {brand}
                </Link>
            )
        },
        title && {
            title: title
        }
    ].filter(item => item);


    return (
            <Breadcrumb
                separator=">" 
                className="path"
                items={items}
            >
            </Breadcrumb>
    )
}

export {ItemPath};