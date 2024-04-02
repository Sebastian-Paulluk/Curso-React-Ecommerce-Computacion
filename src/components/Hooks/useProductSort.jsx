import { useEffect, useState } from "react";

const useProductSort =(products, sortBy)=>{
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect( ()=> {
        let productsCopy = [...products]; 

        if (sortBy == 'cheapest') {
            productsCopy.sort((a, b) => a.price - b.price);
        } else if (sortBy == 'most expensive') {
            productsCopy.sort((a, b) => b.price - a.price);
        } else {
            productsCopy.sort((a, b) => a.id - b.id);
        }

        setSortedProducts(productsCopy);

    }, [products, sortBy]);

    return sortedProducts;
}

export {useProductSort};
