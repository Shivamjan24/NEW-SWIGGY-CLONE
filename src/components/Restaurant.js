import { useContext } from "react";
import Usercontext from "../utils/Usercontext";

const Restaurant = ({name,cloudinaryImageId,cuisines,costForTwo,sla,avgRating,}) => {
    const {Username} = useContext(Usercontext);
    return (
        <div className="w-52 bg-gray-200 hover:bg-gray-300 m-6 p-2 h-96 rounded-lg hover:shadow-xl hover:border border-gray-400 hover:brightness-110 transition-all delay-100 hover:translate-x-3">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="w-32 h-32 rounded-md hover:border border-gray-400 hover:brightness-125"/>
            <div id="content">
                <h3 className="font-extrabold">{name}</h3>
                <h5 className="font-bold text-purple-800">{cuisines.join(", ")}</h5>
                <h5>{sla.deliveryTime+' minutes'}</h5>
                <h5>{avgRating+' stars'}</h5>
                <h4 className="font-semibold">{costForTwo}</h4>
                <h4 className="font-semibold">USER: {Username}</h4>
            </div>
        </div>
    );
};

export default Restaurant;
