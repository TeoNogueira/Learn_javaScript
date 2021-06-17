let chess = {

chessBoardSpaces: 32,
pieces: 0
}


const FuncPlOrSing = (quantiPieces, singular, plural) => {

    return quantiPieces === 1 ? singular : plural

}


const funcForbiddenPieces = (chessBoardSpaces, pieces) => {

    const forbiddenPieces = chessBoardSpaces - pieces
    const fitSingularOrPlural = FuncPlOrSing(forbiddenPieces, 'Cabe', 'Cabem')
    const pluralOrSingularPieces = 
    FuncPlOrSing(forbiddenPieces, 'peça', 'peças')
    return `${fitSingularOrPlural} ${forbiddenPieces} ${pluralOrSingularPieces}` 
}


chess.addPieces = (quantiPieces) => {

const {chessBoardSpaces} = chess

const ifForbiddenPieces = chess.pieces + quantiPieces > chessBoardSpaces


if(chess.pieces === chessBoardSpaces) {

    return 'Tabuleiro lotado!'
}


if(ifForbiddenPieces) {

    return funcForbiddenPieces(chessBoardSpaces, chess.pieces)
   
}


chess.pieces += quantiPieces
   const pluralOrSingularPieces = FuncPlOrSing(chess.pieces, 'peça', 'peças')
    return `Já há ${chess.pieces} ${pluralOrSingularPieces}` 

}



console.log(chess.addPieces(15))
console.log(chess.addPieces(17))
console.log(chess.addPieces(17))

console.log(chess)