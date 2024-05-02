function abriraba() {
  var abriraba = document.querySelector('.pesquisar-aba-tudo')

  var fecharaba = document.querySelector('#fechar-aba')
  fecharaba.style.display = 'block'
  abriraba.style.display = 'block'
}

function fecharaba() {
  var abriraba = document.querySelector('.pesquisar-aba-tudo')
  var fecharaba = document.querySelector('#fechar-aba')
  fecharaba.style.display = 'none'

  abriraba.style.display = 'none'
}

function botaocamisa1() {
  var camisapopular = document.querySelector('#camisa-popular-imagem')

  camisapopular.src =
    'https://github.com/ronan-X/calculator-/assets/142173292/af4154ac-c83c-4ac8-9a46-0125604fb82e'
}

function botaocamisa2() {
  var camisapopular = document.querySelector('#camisa-popular-imagem')

  camisapopular.src =
    'https://github.com/ronan-X/calculator-/assets/142173292/67e65ce3-d235-4adc-88e5-a8b1d79b9d34'
}

camisapopular.style.width = '400px'

function botaocamisa3() {
  var camisapopular = document.querySelector('#camisa-popular-imagem')

  camisapopular.src =
    'https://github.com/ronan-X/calculator-/assets/142173292/3dd1fb89-1e6a-4ef7-a244-4adc02782d45'
}

function drop1() {
  var descricaoproduto = document.querySelector('#descricao-drop1')

  descricaoproduto.style.display = 'block'
}
