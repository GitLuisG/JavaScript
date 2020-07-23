//Eventos
/*
 *  17. EVENTOS DE RATÓN  -  02:54:14
 - Onclic
 - Onmouseover
 - Onmouseout
 */
function apretar(){
    alert("Hola a todos");
}
function encima(){
    alert("el raton esta encima");
}
function fuera(){
    alert("El raton esta A fuera");
}
//llamar a todos los elementos que tengan la class tres
var eventoUno = document.querySelector(".Uno");
var eventoDos = document.querySelector(".Dos");
var eventoTres = document.querySelector(".Tres");

eventoUno.addEventListener("click", function(){alert("hola");});
eventoDos.addEventListener("mouseover", function(){alert("hola");});
eventoTres.addEventListener("mouseout", function(){alert("hola");});