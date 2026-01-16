import type {RootState} from "../app/store.ts";
import {useAppSelector} from "../app/hooks.ts";
import Bank from "./Bank.tsx";
import {getBankName, getRandomIndex, names} from "../utils/constants.ts";
import {useCallback} from "react";

const Balance = () => {
    const balance = useAppSelector<RootState, number>(state => state.balance);
    const quote = useAppSelector<RootState, string>(state => state.quote);
    const index = getRandomIndex(names.length);
    const info = useCallback((index:number) =>getBankName(index),[])



    // const [info] = useState({name:'Braavos'})

    // const info = {name:'Braavos'}

    // const info = useRef({name:'Braavos'})

    console.log(`Render Balance ${index}`)
    return (
        <div className={'text-center text-uppercase'}>
            <Bank info={info} index={index}/>
            <h3 className={'text-5xl text-[whitesmoke]'}>{quote}</h3>
            <h2 className={'text-7xl text-[firebrick]'}>Balance = {balance}</h2>
        </div>
    )
}

export default Balance;