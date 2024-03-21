import { NavLink } from 'react-router-dom';
import './navBar.scss'
import { useEffect, useState } from 'react';
import { getCategories } from '../../../products/getProducts';
import { NavBarCategory } from '../NavBarCategory/NavBarCategory';

const NavBar =()=> {
    const [categories, setCagories] = useState([]);

    useEffect(()=>{
        getCategories()
            .then(response => setCagories(response))
    }, [])

    return(
        <nav>
            <ul>
                <NavLink key={'todos'} className={"nav-link"} to={'/'}>
                    <li className='category'>
                        <span>Mostrar todos</span>
                    </li>
                </NavLink>

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