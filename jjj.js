function composicao(fn1, fn2, fn3) {
    //fn3 passando o resultado da fn2 e fn1
    return function x(valor) {
    
    return fn3(fn2(fn1(valor)))
    
    }
    
    }
    
    
    
    function gritar(texto) {
    
    return texto.toUpperCase()  
    
    
    }
    
    
    function enfatizar(texto) {
    
    return `${texto}!!!!`
    
    }
    
    function tornarLento(texto) {
    
    return texto.split('').join(' ')
    
    }
    
    const exagerado = composicao(
        gritar,
        enfatizar,
        tornarLento
        ) 
    
    
        
    console.log(exagerado('Acabe com eles Valor!'))
    console.log(exagerado('Wheeeeu!'))