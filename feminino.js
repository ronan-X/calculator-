function todos() {
  var todos = document.querySelector('#titulo')

  var negrito = document.querySelector('#todos')

  var camisas = document.querySelector('#camisas')

  var moletons = document.querySelector('#moletons')

  var bermudas = document.querySelector('#bermudas')

  var calcas = document.querySelector('#calcas')

  negrito.style.fontWeight = 'bold'
  camisas.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  todos.innerHTML = 'Todos'
}

function camisas() {
  var camisas = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var moletons = document.querySelector('#moletons')

  var bermudas = document.querySelector('#bermudas')

  var calcas = document.querySelector('#calcas')

  todos.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#camisas')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/8f3916ad-c885-4049-993a-09b2e8af4eee'
  })

  camisas.innerHTML = 'Camisas'
}

function moletons() {
  var moletons = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var camisas = document.querySelector('#camisas')

  var bermudas = document.querySelector('#bermudas')

  var calcas = document.querySelector('#calcas')

  todos.style.fontWeight = 'normal'
  camisas.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#moletons')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/aa8e05bc-2584-4e81-9647-a06ca059ba2e'
  })

  moletons.innerText = 'Moletons'
}

function bermudas() {
  var bermudas = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var moletons = document.querySelector('#moletons')

  var camisas = document.querySelector('#camisas')

  var calcas = document.querySelector('#calcas')

  todos.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  camisas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#bermudas')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/5fffe379-d678-4070-bb2b-2011eae80117'
  })

  bermudas.innerHTML = 'Bermudas'
}

function calcas() {
  var calcas = document.querySelector('#titulo')

  var roupas = document.querySelectorAll('.acessorios-img')

  var todos = document.querySelector('#todos')

  var moletons = document.querySelector('#moletons')

  var bermudas = document.querySelector('#bermudas')

  var camisas = document.querySelector('#camisas')

  todos.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  camisas.style.fontWeight = 'normal'

  var negrito = document.querySelector('#calcas')

  negrito.style.fontWeight = 'bold'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/f380ca76-b93f-4636-8329-a8fa5645bbef'
  })

  calcas.innerHTML = 'Calças'
}
