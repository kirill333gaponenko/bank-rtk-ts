export const names =['Braavos','Reverlands','Westerlands','Crowlands'];

export const getRandomIndex = (bound:number) => Math.trunc(Math.random()*bound)

export const getBankName = (index:number) =>({name: names[index]})

