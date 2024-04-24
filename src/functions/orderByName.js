export const orderByName =(items)=>{
    const orderedItems = items.map ( category => category)
    orderedItems.sort((item1, item2) => item1.name.localeCompare(item2.nombre));   
    return orderedItems;
}