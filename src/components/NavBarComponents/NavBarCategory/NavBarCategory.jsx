import { NavLink } from "react-router-dom";
import './NavBarCategory.scss';
import React from 'react';
import { Button, Dropdown } from 'antd';
import { DropdownListStyle } from "../PersonalizedStyles/DropdownListStyle";
import { ButtonStyle } from "../PersonalizedStyles/ButtonStyle";
import { TRUE } from "sass";

const NavBarCategory =({category})=>{

    const items = category.subcategories.flatMap((subcat, index) => ({
        key: index,
        label: (
            <NavLink className={'nav-link'} to={`/${category.name}/${subcat}`} key={index}>
                {subcat}
            </NavLink>
        ),
    }));

    return (
        <li className='category'>

            <DropdownListStyle>
                <Dropdown 
                    menu={{items,}}
                    placement="bottom"
                    className="dropwdown-list"
                >

                    <NavLink className={'nav-link'} to={`/${category.name}`}>

                        <ButtonStyle>
                            <Button className="nav-item">{category.name}</Button>
                        </ButtonStyle>

                    </NavLink>

                </Dropdown>
            </DropdownListStyle>
            
        </li>
    )
}

export {NavBarCategory};