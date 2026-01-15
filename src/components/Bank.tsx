import {memo} from "react"

interface BankProps{
    info: {name:string};
}
const Bank = ({info}:BankProps) => {
    console.log(`Render Balance ${info.name}`)
    return (
            <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of {info.name}</h1>
    )
}

export default memo(Bank);