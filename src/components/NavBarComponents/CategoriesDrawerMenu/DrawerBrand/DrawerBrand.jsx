import { Link } from "react-router-dom"
import './DrawerBrand.scss';

const DrawerBrand =({brand, category, onClose})=>{
    return (
        <li>
            <Link to={`category/${category.name}/brand/${brand}`}>
                <button className='drawer-brand-item' onClick={onClose}>{brand}</button>
            </Link>
        </li>
    )
}

export {DrawerBrand}