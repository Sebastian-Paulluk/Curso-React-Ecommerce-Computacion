import { NavLink } from 'react-router-dom';
import './navBar.scss'
import { useEffect, useState } from 'react';
import { getCategories } from '../../products/getProducts';

const NavBar =()=> {
    const [categories, setCagories] = useState([]);

    useEffect(()=>{
        getCategories()
            .then(response => setCagories(response))
    }, [])

    const capitalizeFirstLetter =string=>{
        const firstLetter = string.charAt(0).toUpperCase();
        const restOfTheLetters = string.slice(1).toLowerCase();
        
        return firstLetter + restOfTheLetters;
    }

    return(
        <nav>
            <ul>
                <NavLink key={'todos'} className={"nav-link"} to={'/'}>
                    Mostrar todos
                </NavLink>
                {categories.map((item, index)=>{
                    return (
                        <NavLink key={index} className={"nav-link"} to={`/category/${item}`}>
                            {capitalizeFirstLetter(item)}
                        </NavLink>
                    )
                })}
            </ul>
        </nav>
    )
}

export { NavBar };