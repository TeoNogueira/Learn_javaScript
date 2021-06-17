const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]



const valeoBoy = products.map((item) => {

if(item.price < 50) {

return {name: item.name, price: item.price / 2}

}

return item

})

console.log(valeoBoy)

console.log(products)



/*


 // map busca sempre um array podendo ter 3 parametros nele:
 // item << que é o item que está sendo iterado atualmente
 // index << a posição do item que está sendo iterado
// array << que é o próprio array que está sendo iterado
// dos 3 parametros só o item é obrigatório
  const salesProducts = products.map(product => {
 
    if (product.price >= 30) {
       // product.price = product.price / 2
       //no caso se eu por o product.price e return product eu teria nas duas consoles.log um retorno igual da divisão(/2). O objetivo é MANTER O ARRAY INTACTO E SÓ POR PROMOÇÃO nesse retorno
        //pega o parametro +  propriedade do objeto
        return { name: product.name, price: product.price / 2}
         
    }
       //Lembrar de retornar o Parametro

      return product

    })


  console.log(salesProducts)
  console.log(products) */
  