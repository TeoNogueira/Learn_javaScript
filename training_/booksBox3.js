let booksBox = {

    spaces: 5,
    booksIn: 0
}


 booksBox.addBooks = (quantityBooks) => {

booksBox.booksIn += quantityBooks

if(booksBox.booksIn + quantityBooks > booksBox.spaces) {
    const subBeleza = booksBox.spaces - booksBox.booksIn
    const textoPP = `Livros existentes`
    const FullOrNot = booksBox.booksIn > 4 ? 'lotada' : 'com'
    return `Caixa ${FullOrNot} ${booksBox.booksIn} ${subBeleza} ${textoPP}`

} 

if(booksBox.booksIn += quantityBooks) {

const existents = booksBox.booksIn === 1 ? 'existe' : 'há'
const bookOrBooks = booksBox.booksIn === 1? 'Livro' : 'Livros'
return `Já ${existents} ${booksBox.booksIn} ${bookOrBooks}`

}

}

console.log(booksBox.addBooks(3))
