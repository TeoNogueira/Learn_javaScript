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
  



//12 adicionando a transação no localStorage
const updateLocalStorage = () => {
    // esse método vai salvar uma informação no localStorage que contem chave e valor como se fosse um OBJETO inserimos o nome da chave.. E o valor que vai ser um array de objetos em formato de string. Para converter esse array em string a gente usa o JSON.stringify e passar como argumento o transactions que é o array de transações que a let transactions linha 39 está armazenando
    localStorage.setItem('transactions', JSON.stringify(transactions))
    //12 b --- invoque a updateLocalStorage() dentro do formulário abaixo da init()
    
    //12 c --- invoque a updateLocalStorage() dentro do removeTransaction acima da invocação da init()... para atualizar quando remover uma transação do localStorage
    
    }

