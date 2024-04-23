import { Drawer } from "antd"
import { DrawerCategory } from "./DrawerCategory/DrawerCategory";
import './CategoriesDrawerMenu.scss';

const CategoriesDrawer =({categories, drawerVisible, setDrawerVisible}) =>{

    const onClose = () => {
        setDrawerVisible(false);
    };

    return (
        <Drawer
                title="Categorias"
                onClose={onClose}
                open={drawerVisible}
                className='categories-menu'
                placement='left'
                style={{color: 'black'}}
            >
                {categories ?
                    <>
                        {categories.map((category, index)=>(
                            <DrawerCategory key={index} category={category} onClose={onClose}/>
                        ))}
                    </>
                    :
                    <h2 style={{fontWeight: '400', paddingLeft: '20px'}}>No hay categorias</h2> 
                }
        </Drawer>
    )
}

export {CategoriesDrawer}