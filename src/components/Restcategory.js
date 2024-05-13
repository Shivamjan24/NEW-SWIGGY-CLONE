import { useDispatch } from "react-redux";
import { addcartitem } from "../utils/cartslice";

const Restcategory = (props) =>{
    //console.log(props?.props?.name)
    const dispatch =useDispatch();
    return(
        <div className="border-b-2 border-gray-300 shadow-lg bg-slate-100 flex rounded-lg">
            <div className="w-9/12 pl-4 pt-2">
                <button className="bg-green-700 text-white rounded-lg mx-auto py-1 px-3 hover:opacity-80" onClick={()=>{
                    dispatch(addcartitem(props?.props))
                }}>ADD</button>
                <h2 className="font-extrabold">{props?.props?.name}</h2>
                <h3 className="font-semibold">{props?.props?.category}</h3>
                <h4 className="text-sm">{props?.props?.description}</h4>
                <h2 className="text-lg font-semibold">₹ {props?.props?.price/100}</h2>
            </div>
            <div className="w-3/12">
                <img className="w-44 h-44 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+props?.props?.imageId}/>
            </div>
        </div>
    );
};

export  default Restcategory;