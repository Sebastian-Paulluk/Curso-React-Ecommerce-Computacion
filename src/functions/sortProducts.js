const sortProducts =(products, sortOption)=>{
    let sortedProducts = [...products]; 

    if (sortOption === 'cheapest') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'most expensive') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else {
        sortedProducts.sort((a, b) => a.id - b.id);
    }

    return sortedProducts;
}

export {sortProducts}