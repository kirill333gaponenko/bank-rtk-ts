import {memo} from "react"

interface BankProps{
    index:number,
    info: (index: number) => ({name:string});

}
const Bank = ({info,index}:BankProps) => {
    console.log(`Render Balance ${info(index).name}`)
    return (
            <h1 className={'font-bold text-8xl text-[gold]'}>Iron Bank of {info(index).name}</h1>
    )
}

export default memo(Bank);