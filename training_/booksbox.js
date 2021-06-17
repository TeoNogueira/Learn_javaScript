let booksBox = {

spaces:  5,
booksIn: 0

}


// refatoração do código para substituiçao dos if's

const getPluralOrSingular = (quantity, singular, plural) => 
quantity === 1 ? singular : plural 



booksBox.addBooks = (booksQuantity) => {
//desestruturando
let { spaces, booksIn } = booksBox

// se for identico retorne Já está Cheia
if(booksIn === spaces) {

    return 'Já está Cheia'
    
}


// este if afal se for maior que espaço falará a quantidade que cabe dentro
if(booksIn + booksQuantity > spaces) {

    const availableSpaces = spaces - booksIn
    const fitPluralOrSingular = getPluralOrSingular(availableSpaces,'cabe','cabem') 
    const pluralOrSingular = getPluralOrSingular(availableSpaces,'livro','livros')
    return `Só ${fitPluralOrSingular} ${availableSpaces} ${pluralOrSingular}` 

}

   //este if diz a quantidade que entra 
   if(booksIn += booksQuantity) {

     const quantityBooksInBox = getPluralOrSingular(booksIn,'Livro','Livros')

     const ExisteOuHa = getPluralOrSingular(booksIn,'existe', 'há')

    return `Já ${ExisteOuHa} ${booksIn} ${quantityBooksInBox} na caixa`
  }


}


//console.log(booksBox.addBooks(7))


console.log(booksBox.addBooks(1))


console.log(booksBox)

