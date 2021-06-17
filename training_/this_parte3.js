const form = document.querySelector('[data-js="form"]')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.cep.value)

})

    