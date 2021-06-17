const dummyTransactions = [

    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de Frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
    
    ]

   
    const totalAmount = dummyTransactions.filter(item => item.amount > 0)
    .reduce((accu, item) => 
        accu + item.amount, 0
    ).toFixed(2)



    console.log(totalAmount)
    


    