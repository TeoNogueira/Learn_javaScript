const ojb = {

    Nome: 'THOOR'

}

function myFunc({Nome}) {


    console.log({Nome})
}

myFunc(ojb)




/*const makeCat = name => ({

getName: () => name

})
const myCat = makeCat('Loki')

console.log(myCat.getName()) */



/*
class Cat {

    constructor(name) {

        this.name = name
    }

    getName() {

        return this.name
    }
}


const myCat = new Cat('Thor')


console.log(myCat.getName())



Solução para Criar 
sem o uso do this é usar Factory Functions
class Myclass {
 constructor (value) {

    this.prop1 = value

 }

 isThisEqualObj() {

    console.log(this === obj)

    setTimeout(() => {
        
        console.log(this === obj)

    }, 1000)
 }
}


const obj =  new Myclass('value')


obj.isThisEqualObj() */