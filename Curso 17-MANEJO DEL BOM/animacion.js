/*
27. MANEJO DEL BOM  -  06:06:28
Browser Object Model (BOM)
 - Propiedades window 
 - Métodos window
 - Frames
 - History 
 - Location 
 - Navegator
 - Screen 
 */
window.name = "Este es el nombre de la ventana";

var dato = "El nombre es: " + window.name + "<br>";
var ancho = "El ancho es: "+window.outerWidth+"<br>";
var alto = "El alto es: "+window.outerHeight+"<br>";
var anchoInterno = "El ancho interno es: "+window.innerWidth+"<br>";
var altoInterno = "El alto interno es: "+window.innerHeight+"<br>";

var scrollHorizontal = "El scrollHorizontal es: "+window.pageXOffset + "<br>";
var scrollVertical = "El scroll vertical es: "+ window.pageYOffset+"<br>";

var distanciaIzquierda = "La distancia desde la Izquierda es: "+window.screenX+"<br>";
var distanciaSuperior = "La distancia desde la Superior es: "+window.screenY+"<br>";


document.write(dato, ancho,alto,
anchoInterno,altoInterno,scrollHorizontal,
scrollVertical,distanciaIzquierda,distanciaSuperior);

window.alert("Alert");

function visitar(){
    //Abrir una url enuna nueva ventana
     ventana = window.open("Ayuda.html",'_black','width=500 height=300');
};

function cerrar(){
    //cierre la ventana
    ventana.window.close();
};

function dimencion(){
    //se agrega 100 pixeles a la pantalla
    ventana.resizeBy(100, 100);
};

function dimencionTo(){
    //le damos un tamano forzado
    ventana.resizeTo(500, 500);
};

function move(){
    //se mueve en pixeles cada que presione el boton
    ventana.moveBy(500,100);
}
function moveTo(){
    //se mueve en pixeles cada que presione el boton
    ventana.moveTo(500,100);
}
function focus(){
    //Tray la ventana al frente
    ventana.focus();
}
function print(){
    //sirve para imprimir en papel
    ventana.print();
}

alert(window.length);

//historial
var historial = window.history;
document.write(historial);

//localizacion de la carpeta
var localizacion = window.location;
document.write(localizacion);

//Tipo de navegador que usamos 
var navegador = window.navigator.vendor;
document.write(navegador);

//las propidades de la pantalla
var pantalla = window.screen;
console.log(pantalla);

