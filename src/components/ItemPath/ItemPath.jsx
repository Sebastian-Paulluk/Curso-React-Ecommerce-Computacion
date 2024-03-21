import { Link } from "react-router-dom";
import './ItemPath.scss';

const ItemPath =({id, title, brand, category})=>{

    return (
        <div className="item-path">
            <Link to={`/`} className='path'>
                Todos los productos &nbsp;
            </Link>

            {category &&
                <>
                    <span>&nbsp;{'>'}</span>
                    <Link to={`/category/${category}`} className='path'>
                        &nbsp; {category} &nbsp;
                    </Link>
                </>
            }

            {brand &&
                <>
                    <span>&nbsp;{'>'}</span>
                    <Link to={`/category/${category}/${brand}`} className='path'>
                        &nbsp; {brand} &nbsp;
                    </Link>
                </>
            }

            {title &&
                <>
                    <span>&nbsp;{'>'}</span>
                    <Link to={`/item/${id}`} className="path">
                        &nbsp; {title}
                    </Link>
                </>
            }

        </div>
    )
}

export {ItemPath};