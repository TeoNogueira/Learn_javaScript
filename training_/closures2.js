const addTo = a => b => a + b;

const increment = addTo(1)
const increment10 = addTo(10)
const increment20 = addTo(20)

console.log(increment(7))
console.log(increment10(7))
console.log(increment20(7))


//Usando Closures e Currying


function func(a) {

  return function fuunc(b) {
      
        return a + b

    }
}


const beleza = func(15);

const okay = func(25)

const belel = func(30)


console.log(beleza(50))

console.log(okay(50))

console.log(belel(1000))