let carros = {

    estacionamentoQtVagas: 15,
    entradaDeVagas: 0
}

const getPluralOrSingular = (quantiVagas, singular, plural) => 

     quantiVagas === 1 ? singular : plural

     const getAvailableSpacesMessage = 
     (estacionamentoQtVagas, entradaDeVagas) => {  
         //logica do if
    const ProibirEntradaDeVagas = estacionamentoQtVagas - entradaDeVagas
    const fitSingularOrPlural = getPluralOrSingular(ProibirEntradaDeVagas,'Cabe','Cabem')
    const singularOrPluralCars = getPluralOrSingular(ProibirEntradaDeVagas,'carro','carros')

    return `${fitSingularOrPlural} ${ProibirEntradaDeVagas} ${singularOrPluralCars}` 

    }
   

carros.addVagas = quantiVagas => {

const { estacionamentoQtVagas } = carros
   
const isBoxFilled = carros.entradaDeVagas === estacionamentoQtVagas
const forbiddenCars = carros.entradaDeVagas + quantiVagas > estacionamentoQtVagas


//events:

   if(isBoxFilled) {

    return `Estacionamento Lotado` 

   }


   if( forbiddenCars ) {

    return getAvailableSpacesMessage(estacionamentoQtVagas, carros.entradaDeVagas)
   
   }

      carros.entradaDeVagas += quantiVagas

     const PluralOrSingularCar = getPluralOrSingular(carros.entradaDeVagas,'carro','carros')

     const ExistsOrExist = getPluralOrSingular(carros.entradaDeVagas, 'Existe', 'Existem')
     
     return `${ExistsOrExist} ${carros.entradaDeVagas} ${PluralOrSingularCar}` 
    
    }


console.log(carros.addVagas(12))
console.log(carros.addVagas(12))

console.log(carros)