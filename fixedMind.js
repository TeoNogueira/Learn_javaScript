let jetFighter = {
  missilSpaces: 15,
  missilsIn: 0

}

let reserved = {

    missiled: 0
  
  }

  
const myFunc = (quantiMissil, singular, plural) => {


    return quantiMissil === 1 ? singular : plural

}


function funcIf(missilSpaces, jetFighter) {

    const forbbidenMissilsIn = missilSpaces - jetFighter
    const fitSingularOrPlural = myFunc(forbbidenMissilsIn, 'Cabe', 'Cabem')
    return `${fitSingularOrPlural} apenas ${forbbidenMissilsIn}. Por ultrapassar a quantidade exata de 15 espaços, o resto irá para o container`

}


jetFighter.addMissil = (quantiMissil) => {

const { missilSpaces } = jetFighter

const ifDesec = jetFighter.missilsIn + quantiMissil > missilSpaces

if(jetFighter.missilsIn + quantiMissil === missilSpaces) {


    return `Porta misseis Lotado` 
}


if(jetFighter.missilsIn + quantiMissil > missilSpaces) { 
    reserved.missiled += quantiMissil

   
}


if(ifDesec) {

   return funcIf(missilSpaces, jetFighter.missilsIn)
}



    jetFighter.missilsIn += quantiMissil
    const singOrPluralMissil = 
    myFunc(jetFighter.missilsIn, 'Missil', 'Missils')
    const pluralOrSingularExists = 
    myFunc(jetFighter.missilsIn, 'existe', 'Existem' )
    return `Já ${pluralOrSingularExists} ${jetFighter.missilsIn} ${singOrPluralMissil}!`

}


console.log(jetFighter.addMissil(15))
console.log(jetFighter.addMissil(3))
console.log(jetFighter.addMissil(2))
console.log(jetFighter.addMissil(5))
console.log(jetFighter.addMissil(10))
console.log(jetFighter)
console.log(reserved)
