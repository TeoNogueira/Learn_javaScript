const func = (a) => (b) => {

    return a + b

}



const liberarGrana = func(10)
const liberarGrana2 = func(20)
const liberarGrana3 = func(50)


console.log(liberarGrana(100))

console.log(liberarGrana2(200))

console.log(liberarGrana3(200))

//Conceito THIS E O PQ NAO USA-LO!

const numeros = {

    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',

    desestruturar() {

        const { one, two, five} = this
        return `${one}, ${two}, ${five}`
    },

    execDesestrutura () {
     
     const pegarDeses = this.desestruturar()
     console.log(pegarDeses) 

    }
}

numeros.execDesestrutura()



const lala = {

    Ola: 'Olá!',
    Beleza: 'Beleza!',
    Okay: 'Okay!'
}

function receber({Ola, Okay}) {


    return console.log({Ola, Okay})
}

receber(lala)


