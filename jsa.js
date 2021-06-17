const booksBox = {
  
booksIn: 0,

spacesB: 15


}



booksBox.addBooks = quantity => {


if(booksBox.books + quantity === booksBox.spacesB) {


return `Caixa Lotada` 


}

if(booksBox.booksIn + quantity > booksBox.spacesB ) {


    const forbbidenBox = booksBox.spacesB - booksBox.booksIn
     const fitPluralOrSingular = forbbidenBox === 1 ? 'Cabe' : 'Cabem'
     const booksPluralOrSingular = forbbidenBox === 1 ? 'livro' : 'livros'
    return `${fitPluralOrSingular} apenas ${forbbidenBox} ${booksPluralOrSingular} na caixa`
}


 const basic = booksBox.booksIn += quantity

 const bookPluralOrSingular = booksBox.booksIn === 1 ? 'Livro' : 'Livros'
 return `já há ${basic} ${bookPluralOrSingular} na caixa`


}

console.log(booksBox.addBooks(12))
console.log(booksBox.addBooks(4))


console.log(booksBox)