let guitar = {
    
    liveSpaces: 30,    
    liveIn: 0 

}


let infinityLife = {

    spacesIn: 0
}


const myFunc = (quantity, singular, plural) => {

return quantity === 1 ? singular : plural

}


const funcIf = (liveSpaces, liveIn) => {

    const forbbiddenEnter = liveSpaces - liveIn
    const fitSingularOrPlural = myFunc(forbbiddenEnter, 'Cabe', 'Cabem')
    const peopleSingularOrPlural = myFunc(forbbiddenEnter, 'pessoa', 'pessoas')
    
   return `${fitSingularOrPlural} apenas ${forbbiddenEnter} ${peopleSingularOrPlural} no espaço`


}


guitar.addLive = quantity => {

const { liveSpaces } = guitar

const ifDeses = guitar.liveIn + quantity > liveSpaces 

const addReserved = guitar.liveIn + quantity > liveSpaces || guitar.liveIn === liveSpaces


if(addReserved) {


    infinityLife.spacesIn += quantity

}


if( guitar.liveIn === liveSpaces) {


    return `Espaço Lotado!` 
}



if(ifDeses) {
    

return funcIf(liveSpaces, guitar.liveIn)

     
}

    guitar.liveIn += quantity

    const existSingularOrPlural = myFunc(guitar.liveIn, 'existe', 'existem')
    return `Já ${existSingularOrPlural} ${guitar.liveIn} vagas`

}


console.log(guitar.addLive(30))
console.log(guitar.addLive(30))
console.log(guitar.addLive(4))
console.log(guitar.addLive(2))
console.log(guitar.addLive(18))
console.log(guitar)
console.log(infinityLife)
