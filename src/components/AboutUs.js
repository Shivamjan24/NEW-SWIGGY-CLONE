import Aboutcard from "./Aboutcard";
import { useEffect,useState } from "react";

const AboutUs = () =>{
    [team,setteam]=useState([]);
    useEffect(()=>{
        fetchi()
    },[]);
    const fetchi = async ()=>{
        const data= await fetch("https://dummyjson.com/users");
        const json=await data.json();
        setteam(json?.users);
        console.log(json);
    };
    return(
        <div>
            <h1 className="font-extrabold">ABOUT US PAGE</h1>
            <div className="flex-wrap">
                {team.map((ress)=>{
                    return(
                        <Aboutcard key={ress.id} {...ress}/>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutUs;