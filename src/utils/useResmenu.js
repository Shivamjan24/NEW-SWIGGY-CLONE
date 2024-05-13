import { useState,useEffect } from "react";

const useResmenu= (resId) =>{
    const [data, setData] = useState();
    useEffect(()=>{
        fetchh();
    },[]);
    const fetchh = async ()=>{
        const info=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5862321&lng=77.3855549&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json=await info.json();
        setData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };
    return data;
}

export default useResmenu;
