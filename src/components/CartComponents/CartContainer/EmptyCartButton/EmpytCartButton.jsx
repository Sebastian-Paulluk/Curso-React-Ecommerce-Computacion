import { useState } from 'react';
import { Button, Modal } from 'antd';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

export const EmptyCartButton =()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {emptyCart} = useContext(CartContext)

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
      emptyCart();
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };


    return (
        <>
            <Button type='default'
                className='empty-cart-button'
                onClick={()=>showModal()}
            >
              Vaciar carrito
            </Button>
            <Modal
                title="Vaciar carrito?"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Confirmar"
                cancelText="Cancelar"
                width={500}
                centered={true}
                closable={false}
                className='empty-cart-modal'
            >
            </Modal>
        </>
    )
}

