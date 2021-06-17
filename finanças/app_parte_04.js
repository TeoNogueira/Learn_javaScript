// PARTE 6 CORRIGINDO O ERRO DE DUPLICAÇÃO DA INIT() E ERRO DO toFixed()

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
    
    console.log(transactionsAmounts)

// 8 - 1 >>>  o erro do toFixed é que está sendo encadeado com uma string... quando number concatena com string resulta em STRING! então o erro está na parte do reduce logo abaixo.
//Vá para o objeto transaction na linha 129 e converta a entrada de valor(AMOUNT) EM TIPO NUMBER
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


//8 - 0 ->>> AGORA IREMOS CORRIGIR O ERRO DO toFixed
// vá para updateBalanceValues e use uma console.log(transactionsAmounts) abaixo dessa const para ver o erro 

const init = () => {

    // 7 - 8 antes de serem inseridas podemos limpar a ul
     transactionsUl.innerHTML = ''
     //-------------------------------------------------^
    dummyTransactions.forEach(addTransactionsIntoDOM)
    
     updateBalanceValues()
}
 
init()

const generateID = () => Math.round(Math.random() * 1000)




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
 

 const transaction = {id: generateID(),
     name: transactionName,
      amount: Number(transactionAmount)} //FINAL PARTE 6 - // 8 - 2 funçao construtora (convertendo de string para number) 

      dummyTransactions.push(transaction)
      init()
      // 7 - 6 B - limpando os inputs do nome e valor da transação
      // ATENÇÃO!!! PROBLEMAS NO .toFixed
      // OUTRO erro e correção de invocação
      // 7 - 7 vá para a função init  e insira a transactionsUl.innerHTML = ''
      // para evitar uma duplicação da dummyTransactions

      inputTransactionName.value = ''
      inputTransactionAmount.value = ''
      
})
