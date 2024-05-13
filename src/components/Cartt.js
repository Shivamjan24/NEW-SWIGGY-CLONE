import { useSelector } from "react-redux";
import Restcategory from "./Restcategory";
import { useDispatch } from "react-redux";
import { clearcart } from "../utils/cartslice";

const Cartt = () =>{
    const carti=useSelector((store)=> store.cart.items);
    const dispatch= useDispatch();
    console.log(carti);
    return(
        <div className="mt-4 w-6/12 mx-auto">
            <h2 className="font-bold text-xl mb-2">CART</h2>
            <button className="py-1 px-3 rounded-lg bg-red-700 text-white my-2 hover:opacity-70" onClick={()=>dispatch(clearcart())}>CLEAR</button>
            <div>
                
                {carti.map((restt)=>{
                    return (
                        <Restcategory key={restt?.id} props={restt}/>
                    );
                })};
            </div>
        </div>
    );
}

export default Cartt;