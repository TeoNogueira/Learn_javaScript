// PARTE 5 ADICIONANDO AÇÕES QUANDO O FORM FOR ENVIADO

//PAREI NO VÍDEO  50:22 MINUTOS

const transactionsUl = document.querySelector('#transactions')


const incomeDisplay = document.querySelector('#money-plus')


const expenseDisplay = document.querySelector('#money-minus')


const balanceDisplay = document.querySelector('#balance')


// 7 - 1 CRIAR O FORM
const form = document.querySelector('#form')

// 7 - 3

const inputTransactionName = document.querySelector('#text')

//7- 4
const inputTransactionAmount = document.querySelector('#amount')


const dummyTransactions = [
   
   
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de Frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}  

]


const addTransactionsIntoDOM = transaction =>  {

    
    const operator = transaction.amount < 0 ? '-' : '+'
   
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
 
    const amountWithoutOperator = Math.abs(transaction.amount)
 

    const li = document.createElement('li')
    
  
    li.classList.add(CSSClass) 
   
 
    li.innerHTML = `${transaction.name}
     <span>
     ${operator} R$ ${amountWithoutOperator}
     </span>
     <button class="delete-btn">x</button>` 
 

    transactionsUl.append(li)
     
 }


const updateBalanceValues = () => {
    

    const transactionsAmounts = dummyTransactions.map(transaction => transaction.amount)

   const total = transactionsAmounts.reduce((acc, item) =>  acc + item, 0).toFixed(2)

   const income = transactionsAmounts
   .filter(item => item > 0)
   .reduce((acc, item) => acc + item, 0)
   .toFixed(2)
  

   const expense = Math.abs(transactionsAmounts.filter(value => value < 0).reduce((acc, item) => acc + item, 0)).toFixed(2)
   
   
  //  >> FAZENDO INTERPOLAÇÃO PARA OS ID'S DA DOM
  //textContent me retorna todo conteúdo de texto
  balanceDisplay.textContent = `R$ ${total}`
  incomeDisplay.textContent = `R$ ${income}`
  expenseDisplay.textContent = `R$ ${expense}`

}


const init = () => {
   
    dummyTransactions.forEach(addTransactionsIntoDOM)
    
     updateBalanceValues()
}
 
init()


// 7 - 5 gerar id automaticamente
// gera um número aleatório de 0 à 1000

const generateID = () => Math.round(Math.random() * 1000)



//7 - 2 ABAIXO DA INVOCAÇÃO DA INIT INSERIMOS UM LISTENER DE EVENTOS DO FORM
// essa função so será executada quando o submit(primeiro paramêtro inserido) acontecer.
// quando ele tentar ser enviado vamos dizer ao browser que ele realmente não será enviado  >>>> event.preventDefault()
// 7 - 2 

form.addEventListener('submit', event => {

event.preventDefault()

//7 - 4  PARTE B (IMPORTANTE!)
const transactionName = inputTransactionName.value.trim()
const transactionAmount = inputTransactionAmount.value.trim()

// 7 - 2  B  trim remove espaço em branco do inicio ao fim da string
if (transactionName === '' || transactionAmount === '' ) {

    alert('Por favor preencha tanto o nome quanto o valor da transação')

    return
}
 

// 7 - 4 IMPORTANTE!!! momento onde serão inseridos os objetos de acordo com os campos(inputs) preenchidos manualmente
 //se os dois inputs estiverem preenchidos 
 // 7 - 5 B .. ID RECEBE A INVOCAÇÃO DA FUNÇÃO
 const transaction = {id: generateID(),
     name: transactionName,
      amount: transactionAmount}
      //7 - 6   
      dummyTransactions.push(transaction)
      init()
      // 7 - 6 B - limpando os inputs do nome e valor da transação
      // ATENÇÃO!!! PROBLEMAS NO .toFixed
      // OUTRO erro e correção de invocação
      // 7 - 7 vá para a função init  e insira a transactionsUl.innerHTML = ''
      // para evitar uma duplicação da dummyTransactions -->>>> continua no app_parte_04.js

      inputTransactionName.value = ''
      inputTransactionAmount.value = ''
      
})

// 7 - 3 lá no topo