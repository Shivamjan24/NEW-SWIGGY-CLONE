import { useState,useEffect } from "react";

const useOnlinestatus= () =>{
    const [Onlinestatus,setOnlinestatus]=useState(true);
    useEffect(()=>{
        checkstatus();
    },[]);
    const checkstatus= () =>{
        window.addEventListener("offline",()=>{
            setOnlinestatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlinestatus(true);
        })
    }
    return Onlinestatus;
}

export default useOnlinestatus;