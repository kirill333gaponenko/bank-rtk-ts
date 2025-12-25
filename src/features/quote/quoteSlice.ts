import {createSlice} from "@reduxjs/toolkit";
import {fetchQuote} from "../api/quoteAction.ts";


const quoteSlice = createSlice({
    name:'quote',
    initialState:'winter is coming...',
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(fetchQuote.pending,() => 'Pending...')
            .addCase(fetchQuote.rejected,() => 'Failed')
            .addCase(fetchQuote.fulfilled,(_state,action) =>action.payload)


    }

})

export default quoteSlice.reducer;