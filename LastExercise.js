let bands = {

spacesBands: 17,

bandsIn: 0

}


const myFunc = (quantiBands, singular, plural) => {

return quantiBands === 1 ? singular : plural

}


const logicalIf = (spacesBands, bandsIn) => {


    const forbiddensBands = spacesBands - bandsIn
    const fitSingularOrPlural = myFunc(forbiddensBands, 'Cabe', 'Cabem')
    const bandsSingularOrPlural = myFunc(forbiddensBands, 'banda', 'bandas')
    return `${fitSingularOrPlural} ${forbiddensBands} ${bandsSingularOrPlural} na casa!`

}


bands.addBands = (quantiBands) => {

    const { spacesBands } = bands

    const thenIf = bands.bandsIn + quantiBands > spacesBands

if(bands.bandsIn === spacesBands) {


    return `Casa Lotada!`

}


if(thenIf) {

    return logicalIf(spacesBands, bands.bandsIn)


}


    bands.bandsIn += quantiBands

    const existOrExists = myFunc(bands.bandsIn, 'existe', 'existem')
    const bandSingularOrPlural = myFunc(bands.bandsIn, 'banda', 'bandas')
    return `Já ${existOrExists} ${bands.bandsIn} ${bandSingularOrPlural}`


}



console.log(bands.addBands(12))
console.log(bands.addBands(5))
console.log(bands.addBands(1))

console.log(bands)



/* */
