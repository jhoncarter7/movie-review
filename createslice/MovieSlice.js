import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "moviesdetails",
    initialState: {
        moviesData: [],
    },

    reducers:{
        singleData(state, action) {
            state.moviesData = action.payload
        },
        
    }

})

export const movieReducer = MovieSlice.actions
export const selectValue = (state)=> state.moviesdetails.moviesData
export default MovieSlice;