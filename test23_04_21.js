let cafeteira = {
   
   
 spacesL: 15,
 cafeteiraIn: 0
 


}


let infinity = {

    reserved: 0,
}


const myFunc = (quantity, singular, plural) => {


return quantity === 1 ? singular : plural

}



const funcIf = (cafeteiraIn, spacesL) => {

    const forbiddenLitros = Math.abs(spacesL - cafeteiraIn)

    const fitSingularOrPlural = myFunc(forbiddenLitros, 'Cabe','Cabem')
    const litrosSingularOrPlural =  myFunc(forbiddenLitros, 'litro', 'litros')
    
    return `${fitSingularOrPlural} apenas ${forbiddenLitros} ${litrosSingularOrPlural} na cafeteira`


}




cafeteira.addCafe = quantity => {


const { spacesL } = cafeteira

const destructIf = cafeteira.cafeteiraIn + quantity > spacesL


if(cafeteira.cafeteiraIn === spacesL) {

    return `Cafeteira Cheia!`

}


if( cafeteira.cafeteiraIn + quantity > spacesL)   {

infinity.reserved += quantity 
  
}


if(destructIf) {


    return funcIf(spacesL, cafeteira.cafeteiraIn)

}



cafeteira.cafeteiraIn += quantity

const singularOrPluralLitros = myFunc(cafeteira.cafeteiraIn, 'litro', 'litros')
const existSingularOrPlural = myFunc(cafeteira.cafeteiraIn, 'existe', 'existem')

return `Já ${existSingularOrPlural} ${cafeteira.cafeteiraIn} ${singularOrPluralLitros} na cafeteira`

}


console.log(cafeteira.addCafe(15))
console.log(cafeteira.addCafe(90))


console.log(cafeteira)
console.log(infinity)