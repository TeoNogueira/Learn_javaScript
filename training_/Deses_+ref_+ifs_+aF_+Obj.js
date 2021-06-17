let casa = {

  quartos: 12,
  pessoasEm: 0

}


const pluralOrSingular = (quantiPessoas, singular, plural) => {

    return quantiPessoas === 1 ? singular : plural
    
    }

    
const ifFuncAboveQuartos = (quartos, pessoasEm) => {

    const forbbidenPerson = quartos - pessoasEm
    const fitSingularOrPlural = 
    pluralOrSingular(forbbidenPerson,'Cabe', 'Cabem')
    const personSingularOrPlural = 
    pluralOrSingular(forbbidenPerson, 'pessoa', 'pessoas')
    return `${fitSingularOrPlural} ${forbbidenPerson} ${personSingularOrPlural}`

}


casa.addPessoas = quantiPessoas => {

 const { quartos } = casa
 const abovePersonNegative = casa.pessoasEm + quantiPessoas > quartos

if(casa.pessoasEm === quartos) {

    return `Casa lotada!`
}


if(abovePersonNegative) {

 return ifFuncAboveQuartos(quartos, casa.pessoasEm)

} 


    casa.pessoasEm += quantiPessoas
    return `existem ${casa.pessoasEm} pessoas`
}



console.log(casa.addPessoas(10))
console.log(casa.addPessoas(4))
console.log(casa)

