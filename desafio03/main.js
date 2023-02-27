//função
function verificador(resposta1) {
    if (resposta1 == "Front-end" || resposta1 == "Front end"|| resposta1 == "front-end"|| resposta1 == "front end"|| resposta1 == "Back-end" || resposta1 == "Back end"|| resposta1 == "back-end"|| resposta1 == "back end"){
        return
    }
    else{
        alert(msg)
    }
}
function verificador2(resposta2){
    if (resposta2 == "Reat" || resposta2 == "reat" || resposta2 == "Vue" || resposta2 == "vue"||resposta2 == "C#" || resposta2 == "c#" || resposta2 == "Java" || resposta2 == "java"){
        return
    }
    else{
        alert(msg)
    }
}
function verificador3(resposta3){
    if (resposta3 == "1" || resposta3 == "2"){
        return
    }
    else{
        alert(msg)
    }
}
function respostas(resposta1){
    if (resposta1 == "Front-end" || resposta1 == "Front end"|| resposta1 == "front-end"|| resposta1 == "front end"){
        resposta2 = prompt("Você gostaria de aprender Reat ou Vue?")
    }
    
    else{
        if(resposta1 == "Back-end" || resposta1 == "Back end"|| resposta1 == "back-end"|| resposta1 == "back end"){
            resposta2 = prompt("Você gostaria de aprender C# ou Java?")
        }
    }
}
function escolhaDeProfissao(resposta3){
    if (resposta3 == "1"){
        alert(msg2)
        return
    }
    else{
        if(resposta3 == "2"){
            alert(msg3)
            return
        }
    }
}
function Especializar(){
    while (resposta4 !== "não" || resposta4 !== "nao" || resposta4 !== "Não" || resposta4 !== "Nao"){
        resposta5 = prompt("Qual?")
        msg4 = `${resposta5} é uma liguagem muito bacana!!!`
        alert(msg4)
        resposta6 = prompt("mais alguma? (Sim ou não)")
        if(resposta6 == "não" || resposta6 == "nao" || resposta6 == "Não" || resposta6 == "Nao"){
            resposta4 = resposta6
            return
        }
    }
}

//mensagens
msg = "Resposta inválida"
msg2 = "Bons estudos na linguagem que você escolheu!!!"
msg3 = "Continue estudando para virar um Fullstack. Sucesso!!!"
msg5 = "Ok, muito obrigado por ter respondido as pergunta!"

//respostas
resposta1 = prompt("Você gostaria de seguir a área de: Front-end ou Back-End?")
verificador(resposta1)
respostas(resposta1)
verificador2(resposta2)
resposta3 = prompt("Você gostaria de  seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Especializar(1) ou Fullstack(2)? (Digite 1 ou 2)")
verificador3(resposta3)
escolhaDeProfissao(resposta3)
resposta4 = prompt("Gostaria de se especializar ou de conhecer novas linguagens?")
Especializar(resposta4)
alert(msg5)


