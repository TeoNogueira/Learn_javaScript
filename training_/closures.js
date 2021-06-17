


const func = secret => () => secret 


const privateData2 = 'Dados 1'

const privateData3 = 'Dados 2'


const recebe1 = func(privateData2)
const recebe2 = func(privateData3)


console.log(recebe1())

console.log(recebe2())








//AULA IMPORTANTÍSSIMA ROGER MELO PROGRAMADOR
// AO ABRIR PARESENTES SOBRE O A ABERTURA E FECHAMENTO DE BLOCO DE UMA FUNÇÃO... É O MESMO QUE DECLARAR QUE ESSE SERÁ UM OBJETO 

/* const lexical = (secret) => ({

}) */