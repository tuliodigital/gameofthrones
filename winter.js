let got = document.getElementById("got")
console.log(got.innerText) // "Olá, Mundo!"

//Modificação do conteúdo do elemento
got.innerText = "Got!"
console.log(got.innerText) // "Olá, Coder!"

let botao1 = document.getElementById("botao1")
let cupom = document.getElementById("cupom")
botao1.addEventListener("click", function(){
console.log("eu tambem funciono!")

cupom.innerText = "Você acaba de ganhar o cupom got4EVER para compras em nossa loja!"
})

