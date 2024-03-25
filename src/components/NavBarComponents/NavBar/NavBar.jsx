import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.scss'
import { useEffect, useState } from 'react';
import { getCategories } from '../../../products/getProducts';
import { NavBarCategory } from '../NavBarCategory/NavBarCategory';
import { Button, ConfigProvider, Flex } from 'antd';
import { ButtonStyle } from '../PersonalizedStyles/ButtonStyle';

const NavBar =()=> {
    const [categories, setCagories] = useState([]);

    useEffect(()=>{
        getCategories()
            .then(response => setCagories(response))
    }, [])

    return(
        <nav>
            <ul>
                <li>
                    <NavLink key={'todos'} className={"nav-link"} to={'/'}>
                        <ButtonStyle>
                            <Button className='nav-item'>Mostrar todos</Button>
                        </ButtonStyle>
                    </NavLink>
                </li>

                {categories.map((category, index)=>{
                    return (
                        <NavBarCategory key={index} category={category} />
                    )
                })}

            </ul>
        </nav>
    )
}

export { NavBar };