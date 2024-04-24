import { Link } from "react-router-dom"
import './DrawerBrand.scss';

const DrawerBrand =({brand, category, onClose, setActiveCategory})=>{

    const handleBrandClick =()=>{
        setActiveCategory(null);
        onClose();
    }

    return (
        <li>
            <Link to={`category/${category.name}/brand/${brand}`}>
                <button className='drawer-brand-item' onClick={handleBrandClick}>{brand}</button>
            </Link>
        </li>
    )
}

export {DrawerBrand}