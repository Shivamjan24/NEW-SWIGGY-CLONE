import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartslice";

const reduxstore= configureStore({
    reducer:{
        cart: cartreducer,
    },
});

export default reduxstore;
// testing