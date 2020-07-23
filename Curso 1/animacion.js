/*Tipos de datos
 * Numericos
 * Cadena
 * Booleanos
 * FECHAS
 * SIMBOLOS
 * OBJETOS
 */
//string var primero = '1234567';
//number var primero = 1234567;
//Boolean var primero = true;
//Accedet a la fecha var primero = Date();
//Objectvar primero = new Date();
var primero = new Date();
//Typeof dice el tipo de dato que lleva una variable 
document.write(typeof primero,"<br>");
//GetDay es un metodo que retorna el dia
document.write(primero.getDay(),"<br>");
document.write(primero.getMinutes() +":", primero.getHours());
