// CODANDO PARTE 1



//1 - ETAPA DECLARAR UM ARRAY DE OBJETOS

const dummyTransactions = [
   
   
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de Frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}  

]


// 2 -SEGUNDO PASSO ADICIONAR TRANSAÇÕES NO DOM

// 3 - PRIMEIRO PASSO DENTRO DESSA FUNÇÃO addTransactionsIntoDOM
//É OBTER OPERADOR MATEMÁTICO QUE A TRANSAÇÃO IRÁ TER

const addTransactionsIntoDOM = transaction =>  {
   // 3 - 1 ->>> condição do perador - ou + 
   //console.log(operator)
   const operator = transaction.amount < 0 ? '-' : '+'
   // 3 - 5 criando a classe minus(negativo) e plus(positivo) cssclass
   const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'

// 3 - 11 PARTE - B ->remova o operador de subtração da ${transaction.amount} usando o Math.abs()

const amountWithoutOperator = Math.abs(transaction.amount)


   // 3 - 4 remova o console.log(operator) e crie a li
   const li = document.createElement('li')
   
   // 3 - 6 criando a classe
   li.classList.add(CSSClass) // console.log(li) para testar os arrays se negativo(minus) se positivo (plus)


  //---x-------------x-----------x--------x-------------x-----x-------------


  // 3 - 7 ---> depois de criar a li agora iremos setar a marcação dela
  
  // 3 - 7 inserindo com uma templateString se for inserido uma marcação html dentro dessa string.... será convertida em um documento html no momento em que essa atribuição acontecer. li.innerHTML = ``

 // 3 - 8 ponha dentro as tags pré-convocadas e FAÇA uma interpolação substituindo a palavra salário por ${transaction.name}
// 3 - 9 substitua o operador -subtração(-) pela interpolação ${operator}
// 3 - 10 substitua o operador o valor depois de R$ pela interpolação ${transaction.amount}
// 3 - 11 remova o operador de subtração da ${transaction.amount} usando
//o Math.abs()  crie uma const para o código ficar mais simples (refotorar)

   li.innerHTML = `${transaction.name}
    <span>
    ${operator} R$ ${amountWithoutOperator}
    </span>
    <button class="delete-btn">x</button>` 


    console.log(li)
  // 3 - 12 -> teste com a console.log(li)
}

//3 - 3 ->>>> addTransactionsIntoDOM(dummyTransactions[0]) testando o primeiro objeto do array

addTransactionsIntoDOM(dummyTransactions[0])


// CODANDO PARTE 2 AGORA IREMOS INSERIR A li DENTRO DA ul VAZIA DO INDEX.HTML 

// VÁ PARA O ARQUIVOS app_parte_02.js