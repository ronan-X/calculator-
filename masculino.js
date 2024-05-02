function todos() {
  var todos = document.querySelector('#titulo')

  var negrito = document.querySelector('#todos')

  var camisas = document.querySelector('#camisas')

  var moletons = document.querySelector('#moletons')

  var bermudas = document.querySelector('#bermudas')

  var calcas = document.querySelector('#calcas')

  var roupas = document.querySelectorAll('.acessorios-img')

  negrito.style.fontWeight = 'bold'
  camisas.style.fontWeight = 'normal'
  moletons.style.fontWeight = 'normal'
  bermudas.style.fontWeight = 'normal'
  calcas.style.fontWeight = 'normal'

  todos.innerHTML = 'Todos'

  roupas.forEach(roupa => {
    roupa.src =
      'https://github.com/ronan-X/calculator-/assets/142173292/af4154ac-c83c-4ac8-9a46-0125604fb82e'
  })
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
      'https://github.com/ronan-X/calculator-/assets/142173292/af4154ac-c83c-4ac8-9a46-0125604fb82e'
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
      'https://github.com/ronan-X/calculator-/assets/142173292/38bcab21-e926-4a86-86dc-869f3bb9e596'
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
      'https://github.com/ronan-X/calculator-/assets/142173292/40edff8d-582c-4f78-b5a3-a52cdcda6f9c'
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
      'https://github.com/ronan-X/calculator-/assets/142173292/380f5dd8-c3d3-41bf-98fb-b8b531eae239'
  })

  calcas.innerHTML = 'Calças'
}

