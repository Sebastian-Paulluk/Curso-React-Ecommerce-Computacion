import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss'
import { useEffect, useState } from 'react';
import { NavBarCategory } from '../NavBarCategory/NavBarCategory';
import { getCategories } from '../../../services/firebase';
import { CategoriesDrawer } from '../CategoriesDrawerMenu/CategoriesDrawerMenu';
import { orderByName } from '../../../functions/orderByName';

const NavBar =()=> {
    const [categories, setCagories] = useState([]);
    const [drawerVisible, setDrawerVisible] = useState(false);

    useEffect(()=>{
        getCategories()
            .then(response =>{
                const orderedCategories = orderByName(response);
                setCagories(orderedCategories)
            })
    }, [])

    const handleCategoriesDrawerClick =()=>{
        setDrawerVisible(true);
    }

    return(
        <nav>
            <ul>
                <li>
                    <NavLink key={'home'} className={"nav-link"} to={'/'}>
                        <button className='navbar-category-item'>Home</button>
                    </NavLink>
                </li>

                {categories.map((category, index)=>{
                    return (
                        <NavBarCategory key={index} category={category} />
                    )
                })}

                <li>
                    <button
                        className='navbar-category-item categories-drawer-button'
                        onClick={handleCategoriesDrawerClick}
                        >
                            Categorías
                    </button>
                </li>
            </ul>
            <CategoriesDrawer
                categories={categories}
                drawerVisible={drawerVisible}
                setDrawerVisible={setDrawerVisible}
            />
        </nav>
    )
}

export { NavBar };