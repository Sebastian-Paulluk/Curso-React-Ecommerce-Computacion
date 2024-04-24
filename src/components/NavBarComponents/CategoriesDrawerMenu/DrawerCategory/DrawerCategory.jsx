import './DrawerCategory.scss';
import { DrawerBrand } from "../DrawerBrand/DrawerBrand";
import { useEffect, useState } from "react";
import arrow from '../../../../assets/images/arrow-down.png';
import { useNavigate } from 'react-router-dom';

const DrawerCategory =({category, onClose, setActiveCategory, activeCategory}) => {
    const [categoryOpened, setCategoryOpened] = useState(false)
    const navigate = useNavigate();

    const toggleCategoryState =()=>{
        setCategoryOpened(!categoryOpened);
        setActiveCategory(category)
    }

    const handleCategoryClick = () => {
        onClose(); 
        navigate(`category/${category.name}`);
        setActiveCategory(null)
    };

    useEffect(()=>{
        setCategoryOpened(activeCategory === category)
    },[activeCategory]) 

    return (
            <ul>
                <li className="drawer-category">

                        <div className="drawer-category-button" onClick={handleCategoryClick}>{category.name}
                                <button 
                                    className={`open-category-button ${categoryOpened ? 'active' : ''}`} 
                                    onClick={(e)=>{
                                        e.stopPropagation();
                                        toggleCategoryState();
                                    }}    
                                >
                                        <img src={arrow} alt="arrow-icon"></img>
                                </button>
                        </div>

                    <ul className={`drawer-brands-list ${activeCategory === category && categoryOpened ? 'active' : ''}`}>
                        {category.brands.map((brand,key) =>(
                            <DrawerBrand
                                key={key}
                                category={category} 
                                brand={brand}
                                onClose={onClose}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </ul>
                </li>
            </ul>
    )
}

export {DrawerCategory}