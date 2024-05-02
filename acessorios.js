function todos() {
  var todos = document.querySelector('#titulo')

  var negrito = document.querySelector('#todos')

  var camisas = document.querySelector('#dedeiras')

  var moletons = document.querySelector('#colares')

  var bermudas = document.querySelector('#pulseiras')

  var calcas = document.querySelector('#brincos')

  negrito.style.fontWeight = 'bold'
  camisas.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  todos.innerHTML = 'Todos'
}

function dedeiras() {
  var camisas = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var moletons = document.querySelector('#dedeiras')

  var bermudas = document.querySelector('#colares')

  var calcas = document.querySelector('#pulseiras')

  todos.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#dedeiras')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/a90a04a3-35f4-4b8d-a948-ac76dd527569'
  })

  camisas.innerHTML = 'Dedeiras'
}

function colares() {
  var moletons = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var camisas = document.querySelector('#dedeiras')

  var bermudas = document.querySelector('#pulseiras')

  var calcas = document.querySelector('#brincos')

  todos.style.fontWeight = 'normal'
  camisas.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#colares')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/62585251-3018-4699-880e-09f4d8442be8'
  })

  moletons.innerText = 'Colares'
}

function pulseiras() {
  var bermudas = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var moletons = document.querySelector('#dedeiras')

  var camisas = document.querySelector('#colares')

  var calcas = document.querySelector('#brincos')

  todos.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  camisas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#pulseiras')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/7f987f17-bf75-4bb4-9fdf-5af5172463ab'
  })

  bermudas.innerHTML = 'Pulseiras'
}

function brincos() {
  var calcas = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var moletons = document.querySelector('#dedeiras')

  var bermudas = document.querySelector('#colares')

  var camisas = document.querySelector('#pulseiras')

  todos.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  camisas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#brincos')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/36ee9eb6-4cb3-4def-86f2-663543d33e97'
  })

  calcas.innerHTML = 'Brincos'
}
