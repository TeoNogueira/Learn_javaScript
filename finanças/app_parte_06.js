// PARTE 8 ADICIONANDO LOCAL_STORAGE

//PAREI NO VÍDEO  1:00:00 MINUTOS


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


// 10 - 1 >>>>> envolvendo a invocação da local storage passando para um array stringuificado como (argumento do JSON)

// 10 - 1B >> LOGO APÓS REMOVA O ARRAY transactions

const localStorageTransactions = JSON.parse(localStorage
  .getItem('transactions'))

// 11 - Insira uma let armazenando ou as transações da localStorage ou então um array vazio
// 11 - b // IMPORTANTE: selecione a dummyTransactions pressionando crtl + shift + l e renomeie para transactions 

let transactions = localStorage
.getItem('transactions') !== null ? localStorageTransactions : []



// 9 - 1 
const removeTransaction = ID => {
  // lembra que filter usa-se em condições e me retorna true
  transactions = transactions.filter(transaction =>
     transaction.id !== ID)
     updateLocalStorage()
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
    
    const transactionsAmounts = transactions.map(transaction => transaction.amount)
    
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
    transactions.forEach(addTransactionsIntoDOM)
    
     updateBalanceValues()
}
 
init()




//12 adicionando a transação no localStorage
const updateLocalStorage = () => {
// esse método vai salvar uma informação no localStorage que contem chave e valor como se fosse um OBJETO inserimos o nome da chave.. E o valor que vai ser um array de objetos em formato de string. Para converter esse array em string a gente usa o JSON.stringify e passar como argumento o transactions que é o array de transações que a let transactions linha 39 está armazenando
localStorage.setItem('transactions', JSON.stringify(transactions))
//12 b --- invoque a updateLocalStorage() dentro do formulário abaixo da init()

//12 c --- invoque a updateLocalStorage() dentro do removeTransaction acima da invocação da init()... para atualizar quando remover uma transação do localStorage

}


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

      transactions.push(transaction)
      init()
  //12 b --- invocar a updateLocalStorage()
     updateLocalStorage()
      inputTransactionName.value = ''
      inputTransactionAmount.value = ''
      
})





//FIM -------------------- X  -------------------- FIM