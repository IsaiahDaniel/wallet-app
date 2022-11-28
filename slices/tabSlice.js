import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false
};


const tabSlice = createSlice({
    name: "tabModal",
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.visible = action.payload
        }
    }
})

export const { toggleModal } = tabSlice.actions;

export default tabSlice.reducer;