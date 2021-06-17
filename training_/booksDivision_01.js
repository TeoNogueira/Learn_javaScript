//1 CRIAR OBJETO

const booksBox = {

    spaces: 5,
    booksIn: 0

}

// 2: ATRIBUIR ARROWFUNCTION AO OBJETO

booksBox.addBook = (booksQuantity) => {

// 4: CRIAR A PROPRIEDADE SENDO IDENTICA E RETORNAR 'VALOR LOTADO'

if(booksBox.booksIn === booksBox.spaces) {
    
   
    return `Caixa Lotada`


}

// 5 :  SE A PROPRIEDADE BOOKSIN + O PARAMETRO ATRIBUIDO A ELA FOR MAIOR DO QUE SPACES ... então me retorne o Space Sem o BooksIn (No caso bloqueia a entrada dos livros através do parametro pois excede o limite de 5 livros proposto em spaces, se um já estiver a caixa com 2 livros e eu tentar inserir um valor com 5 livros a resposta será 'Só cabem mais 3 livros ')

if(booksBox.booksIn + booksQuantity > booksBox.spaces) {
    
const availableSpaces = booksBox.spaces - booksBox.booksIn
const fitPluralOrSingular = availableSpaces === 1 ? 'Cabe' : 'Cabem'
const bookPluralOrSingular = availableSpaces === 1 ? 'livro' : 'livros'
  return `Só ${fitPluralOrSingular} mais ${availableSpaces} ${bookPluralOrSingular}`


}

    // 3: fazer com que a propriedade booksIn some e atribua um parametro

    booksBox.booksIn += booksQuantity
    const PluralOrSingular = booksBox.booksIn === 1 ? 'livro' : 'livros'
    return `Já há ${booksBox.booksIn} ${PluralOrSingular} na caixa`


}



console.log(booksBox.addBook(2))


console.log(booksBox)


