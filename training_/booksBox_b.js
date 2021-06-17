const booksBox = {

    spaces: 5,
    booksIn: 0
}


booksBox.addBooks = booksQuantity => {

    if(booksBox.booksIn === booksBox.spaces) {

        return 'Caixa lotada'
    }
    
   // o SE + a CONST FORBIDDEN FAZ COM QUE O CóDIGO NAO DEIXE ULTRAPASSAR O LIMITE DE ENTRADA DA QUANTIDADE DE ESPAÇOS NO CASO (5)
  if(booksBox.booksIn + booksQuantity > booksBox.spaces) {
                           //espaços continuará sendo espaços, só não receberá a entrada pois é maior que o spaces
    const ForbiddenBooksIn = booksBox.spaces - booksBox.booksIn

    return `cabem apenas ${ForbiddenBooksIn} Livros`

  }   
    
    
    const booksSingularOrPlural = booksBox.booksIn === 1 ? 'livro' : 'livros'
  

    booksBox.booksIn += booksQuantity
    const booksInBox = booksBox.booksIn
    return `Já há ${booksInBox} ${booksSingularOrPlural} na Caixa`

}


console.log(booksBox.addBooks(4))
console.log(booksBox.addBooks(2))


console.log(booksBox)