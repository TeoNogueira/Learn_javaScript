// question 3:
function vezesLetraAparece(frase, letra) {
    var resultado = 0;
  
    for (const letraAtual of frase) {
      if (letraAtual === letra) {
        resultado++;
      }
    }
    
    return resultado;
  }

// question 2:

/*


function somaDeGauss(numeroMaximo) {

    if(numeroMaximo == 1){

   return 1

   }else{

       return numeroMaximo  + somaDeGauss(numeroMaximo-1)

   }


Explicação:

SE O NUMERO ENVIADO FOR 1 ELE RETORNA 1, SE FOR MASI QUE ISSO ELE RETORNA A FUNÇÃO:

return numeroMaximo  + somaDeGauss(numeroMaximo-1)



*/