import { NavLink } from "react-router-dom";
import { NavBarSubcategory } from "../NavBarSubcategory/NavBarSubcategory";
import './NavBarCategory.scss';

const NavBarCategory =({category})=>{
    return (
            <li className='category'>
                <NavLink className={'nav-link'} to={`/category/${category.name}`}>
                    <span>{(category.name)}</span>
                </NavLink>

            <ul className='dropdown-list'>
                {category.subcategories.map((subcategory, index) => (
                    <NavBarSubcategory key={index} category={category.name} subcategory={subcategory} />
                ))}
            </ul>

            </li>
    )
}

export {NavBarCategory};