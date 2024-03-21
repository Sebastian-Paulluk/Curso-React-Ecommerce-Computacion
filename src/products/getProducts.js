import { products } from "./products";

const getProducts =()=> {
    return new Promise ((resolve) => 
        setTimeout(()=>{
            resolve(products)
        }, 500)
    )
}

const getCategories =()=> {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            const categoriesSet = new Set(products.map ( prod => prod.category));
            const categoriesArray = Array.from(categoriesSet);
            
            const categories = categoriesArray.map( category => {
                const brands = products
                    .filter(prod => prod.category === category)
                    .map(prod => prod.brand);
              
                return {
                    name: category,
                    subcategories: Array.from(new Set(brands))
                };
            });

            resolve(categories)
        }, 500)
    })
}

const getProductById =(productId)=>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.find( prod => prod.id === productId))
        }, 500)
    })
}

const getProductByCategory =(category)=>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter( prod => prod.category === category))
        }, 500)
    })
}

const getProductByCategoryAndBrand =(category, brand)=>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter( prod => (
                prod.category === category && prod.brand === brand
            )))
        }, 500)
    })
}

export {getProducts, getProductById, getProductByCategory, getProductByCategoryAndBrand, getCategories};