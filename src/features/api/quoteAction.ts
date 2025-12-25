import type {AppDispatch} from "../../app/store.ts";
import {putQuote} from "../quote/quoteSlice.ts";

export const fetchQuote = () => {
    return (dispatch: AppDispatch) => {
        dispatch(putQuote('Pending...'));
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(error => {
                console.log(error);
                dispatch(putQuote('Failed to fetch quote.'));
            });
    }
}



