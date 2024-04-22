export const getSelectItems =(product)=>{
    let items = [];
    
    for (let i=1; i<= product.stock; i++) {
        items.push(i)
    }

    return items;
}