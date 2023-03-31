const { configureStore } = require("@reduxjs/toolkit");
// const { default: MovieSlice } = require("./MovieSlice");
import MovieSlice from "./MovieSlice";


const store = configureStore({
    reducer: {moviesdetails: MovieSlice.reducer}
})

export default store;