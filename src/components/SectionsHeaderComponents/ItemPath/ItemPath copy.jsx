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

    return (
            <Breadcrumb separator=">" className="path">

                <Breadcrumb.Item>
                    <Link to={`/`} className='path-item'>Todos los productos</Link>
                </Breadcrumb.Item>

                {category &&
                    <Breadcrumb.Item>
                        <Link to={`/category/${category}`} className='path-item'>
                            {category}
                        </Link>
                    </Breadcrumb.Item>
                }

                {brand &&
                    <Breadcrumb.Item>
                        <Link to={`/category/${category}/${brand}`} className='path-item'>
                            {brand}
                        </Link>
                    </Breadcrumb.Item>
                }

                {title &&
                    <Breadcrumb.Item>
                        {title}
                    </Breadcrumb.Item>
                }

            </Breadcrumb>
    )
}

export {ItemPath};