import { Collapse } from "antd"
import { NavLink } from "react-router-dom"
import './DrawerCategory.scss';

const DrawerCategory =({category})=>{

    const brands = category.brands.map((brand,index) =>(
        <NavLink to={`category/${category.name}/brand/${brand}`} key={index}>
                <p className='drawer-brand'>{brand}</p>
        </NavLink>
    ))

    return (
            <Collapse
                className="custom-collapse"
                collapsible="icon"
                style={{marginLeft: '-30px', width: '120%', padding: 0}}
                defaultActiveKey={['1']}
                items={[
                    {
                    key: '1',
                    label: (
                        <NavLink to={`category/${category.name}`}>
                            <p className='drawer-category'>{category.name}</p>
                        </NavLink>
                    ),
                    children: brands,
                    },
                ]}
            />
        
    )
}

export {DrawerCategory}