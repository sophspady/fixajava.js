// var turno  = prompt ("em qual turno voce estuda")
// if ( turno == "matutino" || turno == "M" || turno == "m"){
// alert("bom dia") 
// } 
// else if ( turno == "vespertino" || turno== "V" || turno == "v" ){
// alert ("boa tarde")
// } 
// else if (turno == "noturno" || turno== "n" || turno == "N"){
// alert ("boa noite")
// }

// var nota1 = Number(prompt ("qual é a sua primeira nota?"))
// var nota2 = Number(prompt ("qual a sua segunda nota?"))
// var media = (nota1 + nota2)/2 
// if (media >= 7 && media < 10 ) {
//  alert ("aprovado")
// }
// else if ( media < 7){
//  alert ("reprovado")
// }
// else if ( media ==10) {
//  alert ("aprovado com distinção")
// }


// var nota1 = Number(prompt("qual é a sua primeira nota?"))
// var nota2 = Number(prompt(" qual é a sua segunda nota?"))
// var media = (nota1 + nota2)/2
// if ( media ==9 && media ==10){
//     alert ("A")
// }
// else if (media >=7,5 && media <=9){
//     alert ("B")
// }
// if (media >=6 && media <=7,5){
//     alert ("C")
// }
// else if (media >=4 && media <=6){
//     alert ("D")
// }
// if (media <4 && media ==0){
//     alert ("E")
// }
// else if (media == "A" || media == "B" || media == "C"){
//     alert("sua media foi" + media + "voce foi aprovado!")
// }
// if (media == "D" || media == "C"){
// alert ("sua media foi" + media + "voce foi reprovado")
// };


// var idade=prompt ("qual a sua idade?")
//  if (idade <16){
//     alert (" voce nao pode votar")
// }
// else if ( idade >=16){
// alert (" voce pode votar")
// };

// var coisa = window.document.write ("<h1> Olá <h1>")

// window.document.getElementsByTagName("p")[0]


// function alerta (){ 
// alert ("bucetao")
// const user = document.getElementsByTagName("input")[0]
// const senha = document.getElementsByTagName ("input")[1].value
// alert("eu sou" + user + senha)

// if (user == "soph" && senha == "123"){
//     alert (" boa")
// }else{
//     alert ("não")
// }
// }

// function quadrado (){}
// let quadrado = document.getElementById("quadrado")
// alert ("saiu")
// quadrado.style.backgroundColor = prompt (" qual é a cor em ingles?")

// quadrado.style.width = prompt ("qual a laegura")+px
// quadrado.style.height = prompt ("qual a altura")+px
// quadrado.innerText = "testado com sucesso"

// alert ("quadrado configurado com sucesso")


// var luz = prompt("qual o seu caso?")
// var consumomensal = 750
// switch (luz) {
//     case "1":
//         res = consumomensal * 2.50
//         alert(res)
//         break
//     case "2":
//         res = consumomensal * 1.35
//         alert(res)
//         break
//     case "3":
//         res = consumomensal * 0.88
//         alert(res)
//         break
//     default:
//         alert("valor inválido")
// }


var litros = prompt("quantos litros?")
var combustivel = prompt(" digite 1- alcool,2-gasolina,3-diesel")
switch (combustivel) {

    case "1":
        res = litros * 3.49
        alert(res)
        break
    case "2":
        res = litros * 5.03
        alert(res)
        break
    case "3":
        res = litros * 5.29
        alert(res)
        break
    default:
        alert("valor inválido!")
}







