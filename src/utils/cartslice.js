import { createSlice } from "@reduxjs/toolkit";

const cartslice= createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers:{
        addcartitem : (state,action) =>{
            state.items.push(action.payload);
        },
        clearcart: (state) =>{
            state.items.length=0;
        },
        removecartitem : (state) =>{
            state.items.pop();
        }
    },
});

export default cartslice.reducer;
export const {addcartitem,clearcart,removecartitem} = cartslice.actions;