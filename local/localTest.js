const transactionsLocalStorage = JSON.parse(localStorage.getItem('transactions'))



let transactions = localStorage.getItem('transactions') !== null ? transactionsLocalStorage : []



const updateLocalStorage = () => {




    localStorage.setItem('transactions', transactions)
}



// invocar no removetransaction() acima da init() para que a lógica de remoção seja lida também no localStorage



// invocar também no formulário abaixo da init()