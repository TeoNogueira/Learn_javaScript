let ovni = {

    spacesNave: 15,
    spacesIn: 0
}

const myFunc = (quantiOvni, singular, plural) => {


return quantiOvni === 1 ? singular : plural

}

const ifFunc = (spacesNave, spacesIn) => {

    const proibaEntrada = spacesNave - spacesIn
    const fitPluralOrSingular = myFunc(proibaEntrada, 'Cabe', 'Cabem')

    return `${fitPluralOrSingular} apenas ${proibaEntrada} na Nave`
}


// logical
ovni.addOvni = quantiOvni => {
    
    const { spacesNave } = ovni

    const ifLogical = ovni.spacesIn + quantiOvni > spacesNave    
    const naveFull = ovni.spacesIn === spacesNave

if(naveFull) {


    return 'Nave Lotada!'
}


if(ifLogical) {

    return ifFunc(spacesNave, ovni.spacesIn)

}

    ovni.spacesIn += quantiOvni
    const butSingularOrPlural = myFunc(ovni.spacesIn, 'existe', 'há') 
    const ovniSingularOrPlural = myFunc(ovni.spacesIn, 'ovni', 'ovnis')
    return `Já ${butSingularOrPlural} ${ovni.spacesIn} ${ovniSingularOrPlural}`
}



console.log(ovni.addOvni(13))
console.log(ovni.addOvni(4))


console.log(ovni)