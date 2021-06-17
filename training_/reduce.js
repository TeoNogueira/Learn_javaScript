const numbers = [1, 2, 3]

//  Reduce() recebe: accumulator, item como parametro
//  parametros opcionais são o index e o Array

// É executado para cada item do Array numbers
// Na primeira vez que essa function o parametro accumulator recebe o segundo argumento no Caso o: 0
// o parametro item recebe o primeiro item do array
// então será 0 + 1

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)


console.log(sumResult)