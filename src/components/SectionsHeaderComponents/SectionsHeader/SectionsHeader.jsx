import { ItemPath } from "../ItemPath/ItemPath";
import { SearchTitle } from "../SearchTitle/SearchTitle";
import { SortingSelect } from "../SortingSelect/SortingSelect";
import './SectionsHeader.scss';

const SectionsHeader =({itemPath=true, orderBy=true, searchTitle=false})=>{

    return (
        <div className="sections-header">
            <div className="sections-header__container">
                {itemPath && !searchTitle && <ItemPath />}
                {searchTitle && <SearchTitle />}
                {orderBy && <SortingSelect />}
            </div>
        </div>
    )
}

export {SectionsHeader};