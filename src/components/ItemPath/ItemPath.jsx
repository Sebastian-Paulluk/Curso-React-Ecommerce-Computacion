import { Link } from "react-router-dom";
import React from 'react';
import { Breadcrumb } from 'antd';
import './ItemPath.scss';

const ItemPath =({id, title, brand, category})=>{

    return (
        <Breadcrumb separator=">" className="item-path">

            <Breadcrumb.Item>
                <Link to={`/`} className='path'>Todos los productos</Link>
            </Breadcrumb.Item>

            {category &&
                <Breadcrumb.Item>
                    <Link to={`/category/${category}`} className='path'>
                        {category}
                    </Link>
                </Breadcrumb.Item>
            }

            {brand &&
                <Breadcrumb.Item>
                    <Link to={`/category/${category}/${brand}`} className='path'>
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