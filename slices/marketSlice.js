import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

const marketSlice = createSlice({
    name: "market",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase("pending", (state, action) => {

            })
            .addCase("error", (state, action) => {

            })
            .addCase("success", (state, action) => {

            })
    }
})

export default marketSlice.reducer;

