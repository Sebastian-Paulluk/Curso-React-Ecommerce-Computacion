import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavBar } from '../NavBar/NavBar';
import './header.scss';

const Header =()=>{
    return (
        <div className='header'>
            <div className='header__top'>
                <Link to='/'>
                    <img src={logo} className='logo' alt='logo'></img>
                </Link>
                <div className='search-product-input-container'>
                    <img src={searchIcon} className='searchIcon'></img>
                    <input type='text' className='search-product-input' placeholder='Buscar producto...'></input>
                </div>
                <CartWidget />
            </div>
            <NavBar />
        </div>
    )
}

export { Header };