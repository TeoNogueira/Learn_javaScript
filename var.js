   
 
var palindromo = "";

for(var index = palavra.length - 1; index >= 0; index--) {
  palindromo += palavra[index]
}

if (palavra == palindromo) {
  return "SIM, SOU UM PALÍNDROMO"
} else {
  return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
}
    




