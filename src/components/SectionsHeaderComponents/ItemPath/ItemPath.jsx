import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { Breadcrumb } from 'antd';
import './ItemPath.scss';
import { PathContext } from "../../../context/PathContext";

const ItemPath =()=>{   
    const {path: {
        category, brand, title}
    } = useContext(PathContext);

    const items = [
        {title:(
                <Link to={`/`} className='path-item'>Home</Link>
            )
        },
        category && {
            title:(
                <Link to={`/category/${category}`} className='path-item'>
                    {category}
                </Link>
            )
        },
        brand && {
            title:(
                <Link to={`/category/${category}/brand/${brand}`} className='path-item'>
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