const booksBox = {

booksIn: 0,
spacesIn: 15,


}


function ifFunc(singular, plural, quantity) {


}


booksBox.addBooks = (quantity) => {

const { booksIn }  = booksBox




if(booksIn === booksBox.spacesIn) {


return `Caixa Lotada`

}

if(booksIn + quantity > booksBox.spacesIn) {

const forbiddenBooks = booksBox.spacesIn - booksIn
const fitPluralOrSingular = forbiddenBooks === 1 ? 'Cabe' : 'Cabem'
const booksPluralOrSingular = forbiddenBooks === 1 ? 'livro' : 'livros'
return `${fitPluralOrSingular} ${forbiddenBooks} ${booksPluralOrSingular} na caixa`


}

booksBox.booksIn += quantity

const pluralOrSingularFirst = booksBox.booksIn === 1 ? 'Existe' : 'Existem'
const booksPluralOrSingular = booksBox.booksIn === 1 ? 'livro' : 'livros'

return `${pluralOrSingularFirst} ${booksBox.booksIn} ${booksPluralOrSingular} na caixa`



}



console.log(booksBox.addBooks(10))

console.log(booksBox.addBooks(2))

console.log(booksBox.addBooks(4))