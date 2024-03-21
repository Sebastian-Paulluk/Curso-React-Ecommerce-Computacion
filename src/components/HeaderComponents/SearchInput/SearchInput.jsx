import './SearchInput.scss';
import searchIcon from '../../../assets/images/search.png';

const SearchInput =()=>{
    

    return (
        <div className='search-product-input-container'>
            <img src={searchIcon} className='searchIcon'></img>
            <input type='text' className='search-product-input' placeholder='Buscar producto...'></input>
        </div>
    )
}

export {SearchInput};