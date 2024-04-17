import { Link } from 'react-router-dom';
import { SearchInput } from '../SearchInput/SearchInput';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavBar } from '../../NavBarComponents/NavBar/NavBar';
import logo from '../../../assets/images/logo.png';
import './header.scss';
import { WishlistWidget } from '../WishlistComponents/WishlistWidget';


const Header =()=>{
    return (
        <div className='header'>
            <div className='header__top'>
                <div className='logo-container'>
                    <Link to='/'>
                        <img src={logo} className='logo' alt='logo'></img>
                    </Link>
                </div>
                <SearchInput />
                <div className='top-right-container'>
                    <CartWidget />
                    <WishlistWidget />
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export { Header };