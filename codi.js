function C()
{

    let meu = window.prompt('Digite seu nome')
    let a = Number(window.prompt('Digite a 1ª nota'))
    let b = Number(window.prompt('Digite a 2ª nota'))
    let c = Number(window.prompt('Digite a 3ª nota'))
    media = (a + b + c)/3

    if (media >= 6){

    document.getElementById("A").innerHTML = (`Aprovado`)
    document.getElementById("Aprovado").innerHTML = (`O aluno ${meu} ficou com a media ${media}`)
    }

    else {
    document.getElementById("RE").innerHTML = (`Reprovado`)
    document.getElementById("Reprovado").innerHTML = (`O aluno ${meu} ficou com a media ${media}`)
    }
    
}