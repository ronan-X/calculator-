function calcular(numero1,numero2){
    var numero1 = parseFloat(document.querySelector("#numero1").value)
var numero2 = parseFloat(document.querySelector("#numero2").value)
    var resultado = numero1 + numero2
    console.log(resultado)
    document.querySelector("#html1").innerHTML = resultado
}
function calcularsub(numero1sub,numero2sub){
    var numero1sub = parseFloat(document.querySelector("#numero1-sub").value)
var numero2sub = parseFloat(document.querySelector("#numero2-sub").value)
    var resultadosub = numero1sub - numero2sub
    console.log(resultadosub)
    document.querySelector("#html2").innerHTML = resultadosub
}
function calcularmulti(numero1multi,numero2multi){
    var numero1multi = parseFloat(document.querySelector("#numero1-multi").value)
var numero2multi = parseFloat(document.querySelector("#numero2-multi").value)
    var resultadomulti = numero1multi * numero2multi
    console.log(resultadomulti)
    document.querySelector("#html3").innerHTML = resultadomulti
}
function calculardiv(numero1div,numero2div){
    var numero1div = parseFloat(document.querySelector("#numero1-div").value)
var numero2div = parseFloat(document.querySelector("#numero2-div").value)
    var resultadodiv = numero1div / numero2div
    console.log(resultadodiv)
    document.querySelector("#html4").innerHTML = resultadodiv
}

function nomecompletoa(nome,sobrenome){
    var nome = document.querySelector("#nome").value
    var sobrenome = document.querySelector("#sobrenome").value

    var nomecompleto = nome + " " + sobrenome

    console.log(nomecompleto)
    document.querySelector("#nomecompletos").innerHTML = nomecompleto
}
function funcaoprimeiro(){
var ax = parseInt(document.querySelector("#x").value);
var b = parseInt(document.querySelector("#b").value);
var c = parseInt(document.querySelector("#c").value);
 
var resultado = (b - c) / ax;
console.log(resultado);
document.querySelector("#a").innerHTML = resultado
}
function funcaoprimeirox(){
    var axn = parseInt(document.querySelector("#x-").value);
    var bn = parseInt(document.querySelector("#b-").value);
    var cn = parseInt(document.querySelector("#c-").value);
     
    var resultadon = (bn + cn) / axn;
    
console.log(resultadon)
document.querySelector("#bn").innerHTML = resultadon 
    }

    function raiz(){
        var a = parseFloat(document.getElementById("num1").value);
        var b = parseFloat(document.getElementById("num2").value);
        var c = parseFloat(document.getElementById("num3").value);
        ans = document.getElementById('resposta');
 
        var delta = (b*b) - 4*a*c;
 
        if (delta>0){
         raiz1 = (-b + Math.sqrt(delta) )/(2*a);
         raiz2 = (-b - Math.sqrt(delta) )/(2*a);
 
         ans.innerHTML = "Raiz 1: " + raiz1 + "<br/>" +"Raiz 2: " + raiz2;
        }else{
         if (delta==0){
          raiz = (-b + Math.sqrt(delta) )/(2*a);
          ans.innerHTML="Raiz dupla: " + raiz;
         }else{
          real = (-b)/(2*a);
          img1  = Math.sqrt(-delta)/(2*a);
          img2  = - Math.sqrt(-delta)/(2*a);

          
 
          ans.innerHTML = "Raiz 1: " + real + "+" + img1+"i"+"<br/>" +
              "Raiz 2: " + real + "+" + img2+"i"
         }
        }
      }

      function quadrado(){
        var areaquadrado = document.querySelector("#area").value

    var resultado = areaquadrado * areaquadrado

    console.log(resultado)
    document.querySelector("#resultadoquadrado").innerHTML = resultado
      }
      function triangulo(){
        var base = document.querySelector("#base").value
        var altura = document.querySelector("#altura").value

        var resultado = base * altura / 2

        console.log(resultado)

        document.querySelector("#areadotriangulo").innerHTML = resultado
      }
      function areacirculo(){
        var pi = 3.14159
        var raio = document.querySelector("#areacirculo").value

        resultado = Math.round(pi * raio * raio)
        console.log(resultado)
      }
