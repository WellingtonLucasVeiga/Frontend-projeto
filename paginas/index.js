var menuM = document.getElementById('menuMobile')
function abrirMenu() {

  if (menuM.style.display === 'flex') {
    menuM.style.display = 'none'
  } else {
    menuM.style.display = 'flex'
  }

}

var fundo = document.body
var lua = document.getElementById('lua')
var cardContainer = document.getElementsByClassName('container-card')
var requisitosPc = document.getElementsByClassName('texto-requisitos')
var siteItem = document.getElementsByClassName('lado-dir-sites')
var projetos = document.getElementsByClassName('item-projeto')

function receberLista(classe) {

  Array.from(classe).forEach((x) => {

    x.classList.toggle('modo-escuro-cards')

  })

}

function mudarModo() {
  fundo.classList.toggle('modo-escuro')
  lua.classList.toggle('modo-claro')
  receberLista(cardContainer)
  receberLista(requisitosPc)
  receberLista(siteItem)
  receberLista(projetos)
}

