import { createContext, useEffect, useState } from "react";

export const PathContext = createContext();

export const PathProvider = ({children}) =>{
    const [path, setPath] = useState({
        category: "",
        brand: "",
        title: "",
    });

    const changePathCategory = newCategory => {
        setPath(prevPath => ({
                ...prevPath,
                category: newCategory
            })
        )
    }

    const changePathBrand = newBrand => {
        setPath(prevPath => ({
                ...prevPath,
                brand: newBrand
            })
        )
    }

    const changePathTitle = newTitle => {
        setPath(prevPath => ({
                ...prevPath,
                title: newTitle
            })
        )
    }

    const resetPath =()=>{
        setPath({
            category: "",
            brand: "",
            title: "",
        })
    }


    return (
        <PathContext.Provider value={{
            path,
            changePathCategory,
            changePathBrand,
            changePathTitle,
            resetPath
        }}>
            {children}
        </PathContext.Provider>
    )
}