function verificaValorValido(chute){
    const numero = +chute //converter o chute para tipo inteiro

    if(chuteForInvalido){
        elementoChute.innerHTML += '<div>Tente novamente!</div>'
        
        
    }

    if (chuteMaiorOuMenor(numero)){
        elementoChute.innerHTML += 
        `<div>Ainda não... O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
        
        
    }

    if (numero === numSecreto){
        document.body.innerHTML = `
        <h2> Você acertou! <h2> 
        <h3> O número secreto era ${numSecreto} </h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `

    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}


function chuteMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
} 

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})