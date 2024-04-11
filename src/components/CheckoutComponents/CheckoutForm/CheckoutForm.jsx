import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { createBuyOrder } from "../../../services/firebase";

const CheckoutForm = () => {
    const { cart } = useContext(CartContext);
    const [idOrder, setIdOrder] = useState(); // Corrección en la destructuración

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        items: "",
        date: ""
    });

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;

        setUserData({ ...userData, [inputName]: inputValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.name === "" && userData.email === "") return;

        let order = {
            name: userData.name,
            email: userData.email,
            items: cart,
            date: new Date()
        };

        createBuyOrder(order)
            .then((data) => {
                setIdOrder(data);
            });
    };

    if (idOrder) return <div>{idOrder}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese nombre"
                value={userData.name}
                name="name" // Se añadió el atributo name
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Mail"
                value={userData.email}
                name="email" // Se añadió el atributo name
                onChange={handleChange}
            />

            <button type="submit">
                Aceptar
            </button>
        </form>
    );
};

export { CheckoutForm };