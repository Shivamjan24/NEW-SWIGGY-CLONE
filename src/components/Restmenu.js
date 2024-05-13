import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {Restcard} from "./Restcard";
import useResmenu from "../utils/useResmenu";

export const Restmenu = () =>{
    const {resId} =useParams();
    const restMenu=useResmenu(resId);
    //console.log(restMenu)
    if(restMenu===undefined)
    return <Shimmer/>
    return(
        <div className="mt-4 w-6/12 mx-auto">
            <div className="text-center">
                <h2 className="font-bold text-2xl">MENU CARD</h2>
            </div>
            <div>
                {restMenu.map((resti)=>{
                        if(resti?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                        {
                            return (<Restcard key={resti?.card?.card?.title} {...resti?.card?.card}/>)
                        }
                    })
                };
            </div>
        </div>
    )
};



