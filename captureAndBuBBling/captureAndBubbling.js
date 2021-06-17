//commit



    const divs = document.querySelectorAll('div')


    divs.forEach(div => div.addEventListener('click', logClass, {


        capture: false


    }))

    

    function logClass(e) {

e.stopPropagation()


console.log(this.classList.value)


    }