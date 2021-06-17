const animes = {

    d_grayman: 'anime com 103 episódios',
    claymore: 'anime com 26 episódios',
    naruto: {
         classic: 'anime com 220 episódios',
         shippuden: 'anime com 500 episódios',
    },

metodoDesestruturar() {

    const { claymore, naruto } = this

    return `${claymore}. ${naruto.classic}, ${naruto.shippuden}`

},

executarMetodoDesestruturar() {

const executar = this.metodoDesestruturar()

console.log(executar) } 

}

animes.executarMetodoDesestruturar()