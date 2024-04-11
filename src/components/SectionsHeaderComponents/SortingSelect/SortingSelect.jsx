import { Select } from 'antd';
import './SortingSelect.scss';
import { useContext } from 'react';
import { ItemListContext } from '../../ItemListComponents/ItemListContainer/itemListContainer';


const SortingSelect =()=>{
    
    const {handleOrderBy} = useContext(ItemListContext);

    const handleChange = (value) => {
        handleOrderBy(value)
      };

    return (
        <div className='sorting-select'>
            <span className='order-by-text'>Ordenar por: </span>
            <Select
                defaultValue="oldest"
                style={{
                width: 140}}
                onChange={handleChange}

                options={[
                    {
                        value: 'oldest',
                        label: 'Antigüedad',
                    },
                    {
                        value: 'cheapest',
                        label: 'Menor precio',
                    },
                    {
                        value: 'most expensive',
                        label: 'Mayor precio',
                    },
                ]}
            />
        </div>

    )
}

export {SortingSelect}