import { Dropdown, Modal } from 'antd';
import dots from '../../../../assets/images/dots.png'
import './OptionsButton.scss';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../context/CartContext';

const OptionsButton =({product})=>{
    const {removeProduct} = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
      removeProduct(product);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };


    const items = [
      {
        label: <Link to={`/item/${product.id}`}>Ver en catálogo</Link>,
        key: '0',
      },
      {
        label: 'Eliminar del carrito',
        key: '1',
        onClick: ()=> showModal(),
      },
    ];

    return (
        <>
        <Dropdown menu={{items,}} trigger={['click']} arrow>
            <img src={dots} className='cart-item__options-button'></img>
        </Dropdown>
        <Modal
            title="Eliminar producto del carrito?"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Confirmar"
            cancelText="Cancelar"
            width={500}
            centered={true}
            closable={false}
            className='discard-product-modal'
        >
        </Modal>
        </>
    )
}

export {OptionsButton};
