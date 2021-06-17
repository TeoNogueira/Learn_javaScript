// CODANDO PARTE 2 AGORA IREMOS INSERIR A li DENTRO DA ul VAZIA DO INDEX.HTML 

// 4 - -->>> obtenha a referencia através do id da ul  lembre-se de testar usando console.log(transactionsUl)


const transactionsUl = document.querySelector('#transactions')

// PARTE 4 >> VAMOS INSERIR NA DOM: SALDO, RECEITAS E DESPESAS

// 6 - 1 > inserir os parágrafos
const incomeDisplay = document.querySelector('#money-plus')
// 6 - 2 >> parágrafo negativo
const expenseDisplay = document.querySelector('#money-minus')
// 6 - 3 >> total
const balanceDisplay = document.querySelector('#balance')


//  

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
 
    //4 - 1 >>>> transactionsUl.innerHTML = li <<<<<< desse modo seria errado pois estamos inserido a partir do javascript um objeto e não uma string.. é necessário o modo append() ou prepend() para inserir a li como string..
    // 4 - 2 >>>>> quando a li é criada a partir do javascript ela é um objeto. o valor que a innerHTML precisa receber é uma string

    transactionsUl.append(li)
     
 }

//ETAPA 3 fazer funcionar SALDO, RECEITAS E DESPESAS

// 5 - 1 >>> iremos obter o valor de cada transação.. ou seja os valores de cada propriedade amount está armazenando, para armazenar isso podemos fazer em um array gerando a partir do map

const updateBalanceValues = () => {
    //5 -2 >>>  
    const transactionsAmounts = dummyTransactions.map(transaction => transaction.amount)
    // 5 - 4 >>
   const total = transactionsAmounts.reduce((acc, item) =>  acc + item, 0).toFixed(2)
   // 5 - 5 >> 
   const income = transactionsAmounts
   .filter(item => item > 0)
   .reduce((acc, item) => acc + item, 0)
   .toFixed(2)
  // 5 - 6 >> FINAL DA PARTE 3 >>> VEJA A PARTE 4 LÁ EM CIMA INSERIDO A CONST 
   const expense = Math.abs(transactionsAmounts.filter(value => value < 0).reduce((acc, item) => acc + item, 0)).toFixed(2)
   
   
   //PARTE 4 - B  
  // 6 - 4 >> FAZENDO INTERPOLAÇÃO PARA OS ID'S DA DOM
  //textContent me retorna todo conteúdo de texto
  balanceDisplay.textContent = `R$ ${total}`
  incomeDisplay.textContent = `R$ ${income}`
  expenseDisplay.textContent = `R$ ${expense}`

  // FINAL PARTE 4 >>> O SÍMBOLO DE NEGATIVO ESTÁ SOBRE O PARÁGRAFO DO MINUS
// ENTÃO ENVOLVA A const expense num Math.abs() para retirar o sinal de negativo

}


//FINAL PARTE 2 >>>>> a init vai executar o preenchimento das informações do estado da aplicação quando a página for carregada
// iremos executar um looping que vai iterar por cada transação


const init = () => {
   
    dummyTransactions.forEach(addTransactionsIntoDOM)
    //5 - 3 invocar a função depois usar console.log(transactionsAmounts) dentro da função updateBalanceValues
     updateBalanceValues()
}
 
init()


