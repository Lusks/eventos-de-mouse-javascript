// 1º Passo: rastrear o(s) elemento(s) HTML.
let botao = document.querySelector('#btn')
// 2º Passo: adicionar evento ao elemento rastreado. Para isso, usaremos uma função.

// Função
// function nomeDaFuncao () {
//    insiraSeuCodigoAqui
// }

// Arrow Function (função de flecha)
// () => {
//  insiraSeuCodigoAqui
//}

// O código fica assim: Elemento.addEventListener('tipo de evento', função)
botao.addEventListener('mouseover', () => {
  botao.textContent = 'Clicado!'
})

botao.addEventListener('mouseout', () => {
  botao.textContent = 'Clique Aqui'
})
