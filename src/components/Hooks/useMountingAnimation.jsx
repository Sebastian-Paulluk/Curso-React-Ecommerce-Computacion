import { useEffect, useState } from "react";

const useMountingAnimation =(delayTime=0)=>{
    const [visibility, setVisibility] = useState(false);

    useEffect (()=>{
        const timerId = setTimeout(()=>{
            setVisibility(true)
        }, delayTime * 1000)
        return () => {
            setVisibility(false)
            clearTimeout(timerId)
        }
    }, []);
    
    return visibility;
}

export {useMountingAnimation};