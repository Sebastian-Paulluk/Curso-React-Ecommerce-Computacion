import { Drawer } from "antd"
import { DrawerCategory } from "./DrawerCategory/DrawerCategory";
import './CategoriesDrawerMenu.scss';
import { useState } from "react";

const CategoriesDrawer =({categories, drawerVisible, setDrawerVisible}) =>{
    const [activeCategory, setActiveCategory] = useState(null);

    const onClose = () => {
        setDrawerVisible(false)
        setActiveCategory(null)
    };

    return (
        <Drawer
                title="Categorías"
                onClose={onClose}
                open={drawerVisible}
                className='categories-menu'
                placement='left'
                style={{backgroundColor:'#154988'}}
            >
                {categories ?
                    <>
                        {categories.map((category, index)=>(
                            <DrawerCategory 
                                key={index} 
                                category={category} 
                                onClose={onClose}
                                setActiveCategory={setActiveCategory}
                                activeCategory={activeCategory}
                            />
                        ))}
                    </>
                    :
                    <h2 style={{fontWeight: '400', paddingLeft: '20px'}}>No hay categorias</h2> 
                }
        </Drawer>
    )
}

export {CategoriesDrawer}