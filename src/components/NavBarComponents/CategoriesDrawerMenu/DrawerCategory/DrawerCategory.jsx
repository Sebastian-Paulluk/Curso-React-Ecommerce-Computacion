import { NavLink } from "react-router-dom"
import './DrawerCategory.scss';
import { DrawerBrand } from "../DrawerBrand/DrawerBrand";
import { useState } from "react";
import arrow from '../../../../assets/images/arrow-down.png';

const DrawerCategory =({category, onClose})=>{
    const [categoryOpened, setCategoryOpened] = useState(false)

    const toggleCategoryState =()=>{
        setCategoryOpened(!categoryOpened);
    }

    const handleCategoryClick = () => {
        onClose(); 
        setCategoryOpened(!categoryOpened);
    };

    return (
            <ul>
                <li className="drawer-category">
                    <NavLink to={`category/${category.name}`}>
                        <button className="drawer-category-button" onClick={handleCategoryClick}>{category.name}</button>
                    </NavLink>
                    
                    <button 
                        className='open-category-button'
                        onClick={toggleCategoryState}>
                            V
                    </button>

                    <ul className={`drawer-brands-list ${categoryOpened ? 'active' : ''}`}>
                        {category.brands.map((brand,key) =>(
                            <DrawerBrand key={key} category={category} brand={brand} onClose={onClose}/>
                        ))}
                    </ul>
                </li>
            </ul>
    )
}

export {DrawerCategory}