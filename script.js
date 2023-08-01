function calcular(){

let qtdJog = Number(document.querySelector('#qtdJog').value)

let resultado = document.querySelector('.resultado')

for(let i=0; i<=qtdJog; i++){

    let altura = Number(prompt("Qual a altura desses jogadores? ")); 
     
    let soma = (soma + altura ) ;
    resultado.innerHTML = `${soma/qtdJog}`
}
}
