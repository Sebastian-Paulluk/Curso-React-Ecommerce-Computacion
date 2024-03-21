const capitalizeFirstLetter =string=>{
    const firstLetter = string.charAt(0).toUpperCase();
    const restOfTheLetters = string.slice(1).toLowerCase();
    
    return firstLetter + restOfTheLetters;
}

const uncapitalizeFirstLetter =string=>{
    const firstLetter = string.charAt(0).toLowerCase();
    const restOfTheLetters = string.slice(1).toLowerCase();
    
    return firstLetter + restOfTheLetters;
}

export {capitalizeFirstLetter, uncapitalizeFirstLetter};