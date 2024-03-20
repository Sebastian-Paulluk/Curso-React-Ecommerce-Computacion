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
            const categories = new Set(products.map(prod => prod.category))
            resolve(Array.from(categories).sort())
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

export {getProducts, getProductById, getProductByCategory, getCategories};