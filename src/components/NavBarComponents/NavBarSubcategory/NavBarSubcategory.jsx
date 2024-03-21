import { NavLink } from "react-router-dom";
import './NavBarSubcategory.scss';

const NavBarSubcategory =({category, subcategory})=>{

    return (
        <NavLink className={'nav-link'} to={`/category/${category}/${subcategory}`}>
            <li className="subcategory">
                {subcategory}
            </li>
        </NavLink>
    )
}

export {NavBarSubcategory};