import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { createBuyOrder } from "../../../services/firebase";
import './CheckoutForm.scss';
import masterCardLogo from '../../../assets/images/master-card-logo.png'
import visaLogo from '../../../assets/images/visa-logo.png'
import americanExpressLogo from '../../../assets/images/american-express-logo.png'
import { useForm } from "react-hook-form";
import { validateNumberType, validateStringType,  } from "./validations";
import { Modal } from "antd";
import { SuccessfulPurchase } from "../SuccessfulPurchase/SuccessfulPurchase";

const CheckoutForm = () => {
    const { cart, getTotalPrice } = useContext(CartContext);
    const { register, formState: {errors} , handleSubmit } = useForm();
    const [idOrder, setIdOrder] = useState(); // Corrección en la destructuración
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, setUserData] = useState({
        creditCardNumber: "",
        creditCardExpirationDate: "",
        creditCardSecurityCode: "",
        name: "",
        dni: "",
        items: "",
        date: ""
    });


    const sendOrder =()=>{
        createBuyOrder(userData)
            .then((data) => {
                setIdOrder(data);
            });
    }


    const showModal = () => {
        setIsModalOpen(true);
      };
  
      const handleOk = () => {
        setIsModalOpen(false);
        sendOrder();
      };
  
      const handleCancel = () => {
        setIsModalOpen(false);
      };


    const onSubmit = (data) => {
        const userDataAndInfo = {
            ...data,
            items: cart,
            date: new Date()
        };
  
        setUserData(userDataAndInfo);
        showModal();
    };









    return (
        <>  
            { idOrder ? (
                    <SuccessfulPurchase idOrder={idOrder}/>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                        <div className="credit-card-logos">
                            <img src={masterCardLogo}></img>
                            <img src={visaLogo}></img>
                            <img src={americanExpressLogo}></img>
                        </div>

                        <div className="input-container">
                            <label htmlFor="creditCardNumber">Número de tarjeta</label>
                            <input
                                type="text"
                                id="creditCardNumber"
                                placeholder="1234 1234 1234 1234"
                                {...register('creditCardNumber', {
                                    required: 'Campo vacío',
                                    validate: validateNumberType,
                                    minLength: { value: 16, message: 'El número debe tener 16 dígitos' },
                                    maxLength: { value: 16, message: 'El número debe tener 16 dígitos' },
                                })}
                                
                            />  
                            {errors.creditCardNumber && <p className="error">{errors.creditCardNumber.message}</p>}
                    
                        </div>

                        <div className="expiration-date-and-code-container input-container">
                            <div className="expiration-date-container">
                                <label htmlFor="expirationDate">Vencimiento</label>
                                    <input
                                        type="text"
                                        id="expirationDate"
                                        placeholder="MM/AA"
                                        {...register('creditCardExpirationDate', {
                                            required: 'Campo vacío',
                                            validate: validateNumberType,
                                            minLength: { value: 4, message: 'Fecha inválida' },
                                            maxLength: { value: 4, message: 'Fecha inválida' },
                                        })}
                                    />  
                                    {errors.creditCardExpirationDate && <p className="error">{errors.creditCardExpirationDate.message}</p>}
                            
                            </div>


                            <div className="security-code-container">
                                <label htmlFor="creditCardSecurityCode">Cod. de seguridad</label>
                                <input
                                    type="text"
                                    id="creditCardSecurityCode"
                                    placeholder="123"
                                    {...register('creditCardSecurityCode', {
                                        required: 'Campo vacío',
                                        validate: validateNumberType,
                                        minLength: { value: 3, message: 'Código inválido' },
                                        maxLength: { value: 3, message: 'Código inválido' },
                                    })}
                                />  
                                {errors.creditCardSecurityCode && <p className="error">{errors.creditCardSecurityCode.message}</p>}
                            </div> 
                        </div>


                        <div className="input-container"> 
                            <label htmlFor="name">Nombre del titular</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="EJ.: María Lopez"
                                autoComplete="name"
                                {...register('name', {
                                    required: 'Campo vacío',
                                    validate: validateStringType
                                })}
                            />  
                            {errors.name && <p className="error">{errors.name.message}</p>}
                        </div>

                        <div className="input-container"> 
                            <label htmlFor="dni">Documento del titular</label>
                            <input
                                type="text"
                                id="dni"
                                placeholder="99.999.999"
                                {...register('dni', {
                                    required: 'Campo vacío',
                                    validate: validateNumberType,
                                })}
                            />  
                            {errors.dni && <p className="error">{errors.dni.message}</p>}
                        </div>

                        <button type="submit">
                            Continuar
                        </button>
                        <Modal
                            title={`¿Confirma la compra por un valor de $ ${getTotalPrice().toLocaleString()}?`}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            okText="Confirmar"
                            cancelText="Cancelar"
                            width={500}
                            centered={true}
                            closable={false}
                            className='confirm-modal'
                        >
                        </Modal>
                    </form>
                )
            }
        </>
    );
};

export { CheckoutForm };