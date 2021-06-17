const kpopBand = {

One: 'Wanna one',
Two: 'Seventeen',
Three: 'Pentagon',
Four: 'Taeyeon',
Five: 'Kard',

desestruturar() {

const {Two, Three, Four} = this

return `Primeiro Colocado: ${Two}, Segundo Colocado: ${Three}, e Terceiro Colocado: ${Four}!`

},

executarDesestruturacao() {

    const pegarDesestrutura = this.desestruturar()

    console.log(pegarDesestrutura)
}


}

kpopBand.executarDesestruturacao()



const musicWinner = {

One: 'Shine',
Two: 'Dont wanna cry',
Three: 'Why',
Four: 'Ride on the wind',
Five: 'Ill Promise you (I.P.U)',


desestruturar() {

    const { Two, Three, One} = this

    return `First Music Winner: ${Two}, Second Music Winner: ${One}, Third Music Winner: ${Three}! `
},

executarDesestrutura() {
  const musicas = this.desestruturar()

  console.log(musicas)

}

}



function lexico() {

 musicWinner.executarDesestrutura()
}
lexico()



const musicas = {

Intro: 'ainda bem',
Mid: 'Para Ti',
Final: 'Eu quero',

desestrutura() {

const { Intro, Mid, Final } = this

return `Início: ${Intro}, Meio: ${Mid}, Fim: ${Final}!`

},


executarDesestrutura() {

    const executar = this.desestrutura()

    console.log(executar)
}


}

musicas.executarDesestrutura()



const ok = {

Response: 'Olá',

}

const { Response } = ok

console.log(ok)


const bibliotecas = {

    React: 'ReactJS',
    BootStrap: 'Bootstrap-CSS',
    TailWind: 'TailWind-CSS',
    TypeScript: 'TYPE-SCRIPT',

    desestruturar() {

        const { React, BootStrap, TypeScript} = this

        return ` Primeira: ${React}, Segunda: ${BootStrap}, Terceira: ${TypeScript}`
    },

    executarDesestrutura() {
       
       const chamarDesestruturar = this.desestruturar()
       console.log(chamarDesestruturar)

    }


    
}


bibliotecas.executarDesestrutura()



