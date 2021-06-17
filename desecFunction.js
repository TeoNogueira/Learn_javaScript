const objForFunc = {

    address: {

        street: 'Florida almeida',
        number: '89',
        district: 'Porto'

    }
}


function funcAddress({address:{street}, address:{number}, address:{district}}) {

    console.log(`Rua ${street}, n° ${number}, bairro: ${district}.`)


}

funcAddress(objForFunc)