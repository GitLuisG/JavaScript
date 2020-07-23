/*
 22. TRABAJO CON NÚMEROS  -  03:49:16
 - Number 
 - parseInt
 - parseFloat 
 - isNaN 
 - isInteger 
 - toFixed 
 - toString 
 */
//en javascript no se usa coma es punto

//Number(a)Covierte una cadena a numero
var a = "10.55";
var b = Number(a);
document.write(typeof b,"<br>");

//parseInt(a) Convierte un numero a Entero
var a = 10.55;
var b = parseInt(a);
document.write(b,"<br>");

//parseFloat() Convierte un numero a flotante
var a = 10.15;
var b = parseFloat(a);
document.write(b,"<br>");


//isNaN(a) Verifica que el contenido de la variable sea un numero
var a = "Hola";
var b = isNaN(a);

if(isNaN(a))
{
    document.write("No es numero","<br>");
}else{
    document.write(b,"<br>");
}

// Number.isInteger(a) verifica si su contenido es 
// un numero entero

var a = 15;
var b = Number.isInteger(a);

if(Number.isInteger(a))
{
    document.write(b," es numero Entero","<br>");
}else{
    document.write(b,"<br>");
}

//.toFixed(3) Cantidad de decimales que se le muestra al usuario
var a = 15.12456726;
var b = a.toFixed(3);

 document.write(b,"<br>");

//.toString() Convierte un valor a String
var a = 15.12456726;
var b = a.toString();

document.write(typeof b," ",b,"<br>");

