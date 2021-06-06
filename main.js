var numero1;
var numero2;
var operacion;


function calculadora() {
    var pantalla = document.getElementById("pantalla")
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatro = document.getElementById("cuatro")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var cero = document.getElementById("cero")
    var sumar = document.getElementById("sumar")
    var restar = document.getElementById("restar")
    var multiplicar = document.getElementById("multiplicar")
    var dividir = document.getElementById("dividir")
    var borrar = document.getElementById("borrar")
    var igual = document.getElementById("igual")

    // eventos numeros
    uno.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "1";
    }
    dos.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "2";
    }
    tres.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "3";
    }
    cuatro.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "4";
    }
    cinco.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "5";
    }
    seis.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "6";
    }

    siete.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "7";
    }
    ocho.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "8";
    }
    nueve.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "9";
    }
    cero.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "0";
    }



    // eventos operaciones
    sumar.onclick = function(e) {
        numero1 = pantalla.textContent;
        operacion = "+";
        vaciar();

    }
    restar.onclick = function(e) {
        numero1 = pantalla.textContent;
        operacion = "-";
        vaciar();
    }
    multiplicar.onclick = function(e) {
        numero1 = pantalla.textContent;
        operacion = "*";
        vaciar();
    }
    dividir.onclick = function(e) {
        numero1 = pantalla.textContent;
        operacion = "/";
        vaciar();
    }

    // Otras funciones

    borrar.onclick = function(e) {
        reset();
    }
    igual.onclick = function(e) {
        numero2 = pantalla.textContent;
        resolver();

    }
}

function vaciar() {
    pantalla.textContent = "";

}


function reset(e) {
    pantalla.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operacion = "";

}

function resolver(e) {
    var resultado = 0;
    switch (operacion) {
        case "+":
            resultado = parseFloat(numero1) + parseFloat(numero2)
            break;
        case "-":
            resultado = numero1 - numero2
            break;
        case "*":
            resultado = numero1 * numero2
            break;
        default:
            resultado = numero1 / numero2
            break;
    }
    pantalla.textContent = resultado;

}