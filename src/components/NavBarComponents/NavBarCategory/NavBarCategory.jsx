import { NavLink } from "react-router-dom";
import './NavBarCategory.scss';
import React from 'react';
import { NavBarBrand } from "../NavBarBrand/NavBarBrand";

const NavBarCategory =({category})=>{

    return (
        <li className='navbar-category'>
            <NavLink className={'nav-link'} to={`category/${category.name}`}>
                    <button className="navbar-category-item">{category.name}</button>
            </NavLink>

            <ul className="brands-list">
                {category.brands.map((brand,key) =>(
                    <NavBarBrand key={key} category={category} brand={brand} />
                ))}
            </ul>
        </li>
    )
}

export {NavBarCategory};