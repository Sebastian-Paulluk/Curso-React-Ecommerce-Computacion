export const validateYearInput =(value)=>{
    const year = parseInt(value, 10)

    return !isNaN(year) && year <= 12
}


export const validateSecurityCode = (value) => {
    const code = String(value);
    return /^\d{3}$/.test(code);
}


export const validateNumberType = (value) => {
    const isNumber = /^\d+$/.test(value.replace(/\s/g, ''));
    return isNumber || 'Solo se admiten números';
  };


  export const validateStringType = (value) => {
    const isString = /^[A-Za-z]+$/.test(value.replace(/\s/g, ''));
    return isString || 'Solo se admiten letras';
};