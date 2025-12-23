import {createSlice} from "@reduxjs/toolkit";


const quoteSlice = createSlice({
    name:'quote',
    initialState:'winter is coming...',
    reducers:{
        putQuote: (_state, action)=>action.payload
    }
})

export default quoteSlice.reducer;
export const {putQuote} = quoteSlice.actions;