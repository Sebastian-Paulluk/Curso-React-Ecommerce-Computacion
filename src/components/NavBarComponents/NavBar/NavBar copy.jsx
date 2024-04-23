import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss'
import { useEffect, useState } from 'react';
import { NavBarCategory } from '../NavBarCategory/NavBarCategory';
import { getCategories } from '../../../services/firebase';

const NavBar =()=> {
    const [categories, setCagories] = useState([]);

    useEffect(()=>{
        getCategories()
            .then(response => setCagories(response))
    }, [])

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

            </ul>
        </nav>
    )
}

export { NavBar };