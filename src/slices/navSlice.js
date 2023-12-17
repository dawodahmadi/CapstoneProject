import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            console.log("action.payload", action.payload)
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            console.log("action.payload", action.payload)
            console.log("state", state)
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;