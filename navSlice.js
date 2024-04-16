import { createSlice } from "@reduxjs/toolkit";

//default location in app
//pushing into datalayer
const initialState={
    origin: null,
    destination: null,
    travelTimeInformation:null
}
export const navSlice=createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin= action.payload;
        },

        setDestination: (state, action) => {
            state.origin= action.payload;
        },

        setTravelTimeInformation: (state, action) => {
            state.origin= action.payload;
        },
    }
})

export const {setOrigin,setDestination,setTravelTimeInformation}=navSlice.actions;


//pulling from data layer
//Selectors

export const selectOrigin = (state)=> state.nav.origin;
export const selectDestination = (state)=> state.nav.destination;
export const selectTravelTimeInformation = (state)=> state.nav.travelTimeInformation;

export default navSlice.reducer;
