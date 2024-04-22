function pesquisar() {
  var procurar = document.querySelector('#procurar-div')

  var fechar = document.querySelector('#fechar')

  var lupa = document.querySelector('#lupa')

  var lupaII = document.querySelector('#lupa-2')

  lupaII.style.display = 'block'

  lupa.style.display = 'none'

  fechar.style.display = 'block'
  procurar.style.display = 'block'
}

function fechar() {
  var procurar = document.querySelector('#procurar-div')

  var fechar = document.querySelector('#fechar')

  var lupa = document.querySelector('#lupa')

  lupa.style.display = 'block'

  fechar.style.display = 'none'

  procurar.style.display = 'none'
}

