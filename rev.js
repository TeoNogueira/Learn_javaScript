const booksBox = {

spaces: 25,
booksIn: 0,


}


const myFunc = (quantity, singular, plural ) => {


return quantity === 1 ? singular : plural


}


const desecFunc = (spaces, booksIn) => {

    const forbbidenBox = spaces - booksIn
    const pluralOrSingularBooks = myFunc(forbbidenBox,'livro', 'livros')
    const fitPluralOrSingular = myFunc(forbbidenBox, 'Cabe', 'Cabem')
    const justPluralOrSingular = myFunc(forbbidenBox, 'somente', 'apenas')
    return `${fitPluralOrSingular} ${justPluralOrSingular} ${forbbidenBox} ${pluralOrSingularBooks} na caixa`

}


booksBox.addBox = quantity => {


    const { spaces } = booksBox


    if(booksBox.booksIn === spaces) {


        return `Caixa Lotada!`
        
        }
    

if(booksBox.booksIn + quantity > spaces) {

    return desecFunc(spaces, booksBox.booksIn)



}



//
  booksBox.booksIn += quantity

//
const booksPluralOrSingular = myFunc(booksBox.booksIn, 'livro', 'livros')
const existsPluralOrSingular = myFunc(booksBox.booksIn, 'existe', 'existem')

return `Já ${existsPluralOrSingular} ${booksBox.booksIn} ${booksPluralOrSingular} na caixa`


}



console.log(booksBox.addBox(19))

console.log(booksBox.addBox(19))
