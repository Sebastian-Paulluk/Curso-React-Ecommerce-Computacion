import { useContext } from "react";
import { ItemListContext } from "../../ItemListComponents/ItemListContainer/itemListContainer";
import './SearchTitle.scss';
import { Link } from "react-router-dom";

const SearchTitle =()=>{
    const {searchedText} = useContext(ItemListContext);

    return (
        <div className="search-title">
            <Link to='/'>
                <button className="quit-search-button" title="Cancelar búsqueda">
                    <span>x</span>
                </button>
            </Link>
            <span className="searching">Buscando:</span>
            <span className="dots">...</span>
            <span className="searched-text">{searchedText}</span>
            <span className="dots">...</span>
        </div>
    )
};

export {SearchTitle};