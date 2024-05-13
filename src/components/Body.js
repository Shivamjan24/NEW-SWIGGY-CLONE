import Shimmer from "./Shimmer";
import Restaurant from "./Restaurant";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from '../utils/Usercontext';

const Body = () => {
    const [restaurantList,setList]= useState([]);
    const [filterrest,setfilter]= useState([]);
    const [txtval,settxt]=useState();
    const Onlinestatus=useOnlinestatus();
    const {Username,setName}= useContext(Usercontext);
    useEffect(()=>{fetching()},[]);
    const fetching = async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5862321&lng=77.3855549&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilter(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json);
        //console.log(restaurantList);
    }
    if(Onlinestatus===false){
        return <h1>OOPS!!! YOU ARE NOT CONNNECTED TO NETWORK</h1>
    }
    if(restaurantList===undefined)
    return <h1>NO RESTAUARNTS AVAILABLE AT THE MOMENT</h1>
    if(restaurantList.length===0)
    {
        return (
            <div className="container">
                <Shimmer/>
            </div>
        );
    }
    return (
        <div className="mt-5">
            <div className="mb-4 px-4 flex">
                <div className="nip">
                    <input type="text" className="border border-black mr-4 rounded-md h-8" value={txtval} onChange={(e)=>{
                        settxt(e.target.value)
                    }}></input>
                    <button className="bg-blue-500 px-3 py-1 mx-2 rounded-lg border-black text-white hover:opacity-90" onClick={()=>{
                        const filt=restaurantList.filter((rest)=>{
                            if(rest.info.name.toLowerCase().includes(txtval.toLowerCase()))
                            return rest;
                        })
                        setfilter(filt);
                        settxt("");
                    }}>SEARCH</button>
                </div>
                <button className="bg-blue-500 px-3 py-1 rounded-lg border-black text-white hover:opacity-90" onClick={
                    ()=>{
                        const newlist=restaurantList.filter((rest)=>{
                            return rest.info.avgRating>4;
                        })
                        setfilter(newlist);
                    }
                }>TOP RATED RESTAURANTS</button>
                <input type="text" className="border border-black ml-4 rounded-md h-8" value={Username} onChange={(e)=>{
                setName(e.target.value)
                    }}></input>
            </div>
            <div className="flex flex-wrap">
                {filterrest && filterrest.map((rest)=>{
                    return (
                    <Link to={"/restaurant/"+rest.info.id} key={rest.info.id}> <Restaurant  {...rest.info}/> </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;

//https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.2104232&lng=78.9618845&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING