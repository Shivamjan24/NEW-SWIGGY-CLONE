import React from 'react';
import { lazy,Suspense } from 'react';
import ReactDom from 'react-dom/client';
import  Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import {Restmenu} from './components/Restmenu';
import Shimmer from './components/Shimmer';
import { useState,useContext,useEffect } from 'react';
import Usercontext from './utils/Usercontext';
import { Provider } from 'react-redux';
import reduxstore from './utils/reduxstore';
import Cartt from "./components/Cartt";

// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

const AboutUs=lazy(()=>import('./components/AboutUs'));


const Page = () => {
    const [Name,setName]= useState("Default");
    useEffect(()=>{
    const data={Username:"Shivam Kaushik"};
    setName(data.Username);
    },[]);

    return (
        <Provider store={reduxstore}>
            <Usercontext.Provider value={{Username:Name,setName}} >
                <div className="container">
                    <Header/>
                    <Outlet/>
                </div>
            </Usercontext.Provider>
        </Provider>
    );
};

const pathh= createBrowserRouter(
    [
        {
            path:'/',
            element:<Page/>,
            errorElement: <Error/>,
            children:[
                {
                    path:'/',
                    element: <Body/>,
                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/about",
                    element:<Suspense fallback={<Shimmer/>}><AboutUs/></Suspense>,
                },
                {
                    path:"/restaurant/:resId",
                    element:<Restmenu/>,
                },
                {
                    path:"/cart",
                    element:<Cartt/>,
                },
            ],
        },   
    ]);

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={pathh}/>);