const phaseScores = [

    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
    
  ]


  const rogerScores = phaseScores.reduce((accumulator, phaseScore) => {
    
    // quando quero um resultado exato, ponho um Socket(parametro) e a propriedade que resulte num Valor identico ao que eu Quero
    if(phaseScore.name === 'Roger Melo') {

//o valor que o accumulator já tem somado com a pontuação Roger melo
        accumulator += phaseScore.score
// numa linguagem simples posso dizer que o acumulador entra no item que está com a propriedade score(no caso phaseScore segundo a regra de parametros do reduce)
    } 

    return accumulator
  }, 0)

  console.log(`${rogerScores} Roger Melo`) 


  const pegarCalcInName = phaseScores.reduce((accumulator, item) => {
   
    if(item.name === 'Vinicius Costa') {


      accumulator += item.score
    }
   
    return accumulator

  }, 0)

  console.log(`${pegarCalcInName} Vinicius costa`)

