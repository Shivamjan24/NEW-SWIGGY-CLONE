import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";


const Header = () => {
    const[btnname,setbtn]=useState("LOGIN");
    const Onlinestatus=useOnlinestatus();
    const {Username} = useContext(Usercontext);
    const itemss=useSelector((store)=>store.cart.items);
    console.log(itemss)
    
    return (
        <div className="flex justify-between p-2 bg-pink-200 w-full">
            <div id="image-logo">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395" className="w-32"/>
            </div>
            <div className="pt-6">
                <ul className="flex">
                    <li className="mx-2 font-bold">
                        ONLINE STATUS:{Onlinestatus===true ? "☑️" :  "❌"}
                    </li>
                    <li className="mx-2 font-bold">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="mx-2 font-bold">
                        <Link to="/about">ABOUT US</Link>
                    </li >
                    <li className="mx-2 font-bold">
                        <Link to="/contact">CONTACT US</Link>
                    </li>
                    <li className="mx-3 font-bold">
                        <Link to="/cart">CART - {itemss.length} ITEMS</Link>
                    </li>
                    <li>
                        <button className="bg-blue-500 px-3 py-2 rounded-lg border-black text-white hover:opacity-90" onClick= {
                            ()=>{
                                btnname==="LOGIN" ? setbtn("LOGOUT") : setbtn("LOGIN");
                            }
                        }>{btnname}</button>
                    </li>
                    <li className="mx-3 font-bold">
                        {Username}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
