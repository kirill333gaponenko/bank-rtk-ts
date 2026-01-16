import type {RootState} from "../app/store.ts";
import {useAppSelector} from "../app/hooks.ts";
import Bank from "./Bank.tsx";
import {useMemo} from "react";
import {getRandomIndex, names} from "../utils/constants.ts";

const Balance = () => {
    const balance = useAppSelector<RootState, number>(state => state.balance);
    const quote = useAppSelector<RootState, string>(state => state.quote);
    const index = getRandomIndex(names.length);
    const info =useMemo(() => ({name:names[index]}),[index]);

    // const [info] = useState({name:'Braavos'})

    // const info = {name:'Braavos'}

    // const info = useRef({name:'Braavos'})

    console.log(`Render Balance `)
    return (
        <div className={'text-center text-uppercase'}>
            <Bank info={info}/>
            <h3 className={'text-5xl text-[whitesmoke]'}>{quote}</h3>
            <h2 className={'text-7xl text-[firebrick]'}>Balance = {balance}</h2>
        </div>
    )
}

export default Balance;