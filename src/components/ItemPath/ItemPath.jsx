import { Link } from "react-router-dom";
import { getCategories } from "../../products/getProducts";

const ItemPath =({id, category, title})=>{
    getCategories().then(resp => console.log(resp))
    return (
        <div className="item-path">
            <Link to={`/category/${category}`}>
                {category}
            </Link>
            {' > ' + title}
        </div>
    )
}

export {ItemPath};