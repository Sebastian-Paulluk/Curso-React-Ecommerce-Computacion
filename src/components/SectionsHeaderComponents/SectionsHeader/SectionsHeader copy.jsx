import { ItemPath } from "../ItemPath/ItemPath";
import { SortingSelect } from "../SortingSelect/SortingSelect";
import './SectionsHeader.scss';

const SectionsHeader =({title, brand, category, onClick, orderBy=true})=>{

    return (
        <div className="sections-header">
            <ItemPath category={category} brand={brand} title={title} />
            {orderBy && <SortingSelect onClick={onClick} />}
        </div>
    )
}

export {SectionsHeader};