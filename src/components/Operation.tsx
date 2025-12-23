import {useState} from "react";
import {deposit, withdraw} from "../features/account/balanceSlice.ts";
import {fetchQuote} from "../features/api/quoteAction.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className={'flex justify-center mt-10'}>
                <button
                    className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'}
                    onClick={() => dispatch(withdraw(sum))}>Withdraw
                </button>
                <input
                    className={'text-center border rounded-lg font-bold mx-2 text-white'}
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                    type="number"
                    min="0"
                />
                <button
                    className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'}
                    onClick={() => dispatch(deposit(sum))}>Deposit
                </button>
            </div>
            <div className={'flex justify-center mt-2'}>
                <button
                    className={'bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-9 rounded-lg'}
                    onClick={() => dispatch(fetchQuote())}
                >
                    Get Quote
                </button>
            </div>
        </>
    )
}

export default Operation;