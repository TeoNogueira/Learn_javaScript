// PARTE 7 ADICIONANDO O BOTÃO DE DELETAR

//PAREI NO VÍDEO  56:53 MINUTOS


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

// 9 -1 B // ponha let para que possa ser atribuido algum valor

let dummyTransactions = [
   
   
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de Frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}  

]


// 9 - 1 
const removeTransaction = ID => {
  // lembra que filter usa-se em condições e me retorna true
  dummyTransactions = dummyTransactions.filter(transaction => transaction.id !== ID)

  init()

}



const addTransactionsIntoDOM = transaction =>  {
  
    const operator = transaction.amount < 0 ? '-' : '+'
   
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
 
    const amountWithoutOperator = Math.abs(transaction.amount)
 

    const li = document.createElement('li')
    
  
    li.classList.add(CSSClass) 
   
 // 9 - 0 - FORMATAR BOTÃO criando um evento nele
    li.innerHTML = `${transaction.name}
     <span>
     ${operator} R$ ${amountWithoutOperator}
     </span>
     <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
     x
     </button>` 
 

    transactionsUl.append(li)
     
 }


const updateBalanceValues = () => {
    
    const transactionsAmounts = dummyTransactions.map(transaction => transaction.amount)
    
    console.log(transactionsAmounts)


   const total = transactionsAmounts.reduce((acc, item) =>  acc + item, 0).toFixed(2)


   const income = transactionsAmounts
   .filter(item => item > 0)
   .reduce((acc, item) => acc + item, 0)
   .toFixed(2)
  

   const expense = Math.abs(transactionsAmounts.filter(value => value < 0).reduce((acc, item) => acc + item, 0)).toFixed(2)
   
   
 
  balanceDisplay.textContent = `R$ ${total}`
  incomeDisplay.textContent = `R$ ${income}`
  expenseDisplay.textContent = `R$ ${expense}`

}


const init = () => {

     transactionsUl.innerHTML = ''
    dummyTransactions.forEach(addTransactionsIntoDOM)
    
     updateBalanceValues()
}
 
init()

const generateID = () => Math.round(Math.random() * 1000)



form.addEventListener('submit', event => {

event.preventDefault()


const transactionName = inputTransactionName.value.trim()
const transactionAmount = inputTransactionAmount.value.trim()


if (transactionName === '' || transactionAmount === '' ) {

    alert('Por favor preencha tanto o nome quanto o valor da transação')

    return
}
 

 const transaction = {
     id: generateID(),
     name: transactionName,
      amount: Number(transactionAmount)
    } 

      dummyTransactions.push(transaction)
      init()
     

      inputTransactionName.value = ''
      inputTransactionAmount.value = ''
      
})
