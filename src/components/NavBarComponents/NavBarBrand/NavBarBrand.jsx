import { Link } from 'react-router-dom';
import './NavBarBrand.scss';

const NavBarBrand =({brand, category})=>{
    return (
        <li>
            <Link to={`category/${category.name}/brand/${brand}`}>
                <button className='navbar-brand-item'>{brand}</button>
            </Link>
        </li>
    )
}

export {NavBarBrand}