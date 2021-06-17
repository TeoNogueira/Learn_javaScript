//FORM

const form = document.querySelector('#form')


const inputTransactionName = document.querySelector('#text')

const inputTransactionAmount = document.querySelector('#amount')




//Balanceamento

const displayTotal = document.querySelector('#balance')


const displayIncome = document.querySelector('#money-plus')

const displayExpense = document.querySelector('#money-minus')


// add li's in ul

const transactionsUl = document.querySelector('#transactions')

///

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []




const addTransactionsIntoDOM = transaction => {

const operator = transaction.amount < 0 ? '-' : '+'

const CSSClass = transaction.amount < 0 ? 'minus' : 'plus' //

const withoutOperator = Math.abs(transaction.amount)


const li = document.createElement('li')

li.classList.add(CSSClass)

li.innerHTML = `
${transaction.name}
<span> ${operator} R$ ${withoutOperator} </span>

<button class="delete-btn" onClick="removeTransactions(${transaction.id})">
x
 </button>

`
transactionsUl.append(li)


}

const removeTransactions = ID => {

transactions = transactions.filter(item => item.id !== ID)

updateLocalStorage()
init()
}

const updateBalanceValues = () => {

const transactionsAmount = transactions.map(transaction => transaction.amount)

const total = transactionsAmount.reduce((acc, item) => acc + item, 0).toFixed(2)

const income = transactionsAmount.filter(item => item > 0).reduce((acc, item) => acc + item, 0).toFixed(2)

const expense = transactionsAmount.filter((item => item < 0)).reduce((acc, item) => acc + item, 0).toFixed(2)

//Entrada como conteúdo de texto

displayTotal.textContent = `R$ ${total}`
displayIncome.textContent = `R$ ${income}`
displayExpense.textContent = `R$ ${expense}`

}


const init = () => {

  transactionsUl.innerHTML = ''
transactions.forEach(addTransactionsIntoDOM)
updateBalanceValues()



}

init()

const updateLocalStorage = () => {

localStorage.setItem('transactions', JSON.stringify(transactions))

}





const generateID = () => Math.round(Math.random() * 1000)


form.addEventListener('submit', event => {


event.preventDefault()


const inputName = inputTransactionName.value.trim()

const inputAmount = inputTransactionAmount.value.trim()


if(inputName === '' || inputAmount === '') {

alert('Por favor preencha todos os campos!!')
 
return

}

let transaction = {
id: generateID(),
name: inputName,
amount: Number(inputAmount)

}

transactions.push(transaction)
init()
updateLocalStorage()


inputTransactionName.value = ''
inputTransactionAmount.value = ''

}) 





