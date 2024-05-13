import Restcategory from "./Restcategory";
import { useState } from "react";

export const Restcard = (restii) =>{
    //console.log(restii?.itemCards)
    const [showmenu,setshowmenu]=useState(false);
    
    return(
        <div className="flex-none">
            <div className="w-full mx-auto flex justify-between my-1 py-2 cursor-pointer border-b-2 border-gray-300 shadow-lg bg-slate-100 rounded-lg" onClick={()=>setshowmenu(!showmenu)}>
                <span className="font-bold text-xl">{restii?.title}</span>
                <span>⬇️</span>
            </div>
            <div>
                {showmenu && restii?.itemCards.map((restt)=>{
                    return (
                        <Restcategory key={restt?.card?.info?.id} props={restt?.card?.info}/>
                    )
                })}
            </div>
        </div>
    )
};
