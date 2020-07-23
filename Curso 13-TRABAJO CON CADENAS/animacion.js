/*
 23. TRABAJO CON CADENAS  -  04:02:09
 - length \da la longitud
--------Buscar palabras
 - indexOf
 - search
 - lastIndexOf
 - match 
 - Substr 
 - substring 
 - charAt 
 - startsWith 
 - endsWith
 - includes 
-----------
 - repeat 
 - replace 
 - slice 
 - Split
 - trim 
 - toLowerCase
 - toUpperCase 
 - concat
 - Variables incluidas
 */

var saludo = "Hola 'a' todos";
var saludo2 = 'Hola "a" todos';

document.write(saludo,"<br>",saludo2);
//----------------------------
var a = 'Hola a ';
var b = "Todos";
//se puede usar ,o + para concatenar 2 cadenas
document.write("<br>",a+b);
//------------------------------
var a = 'Hola a Todos';
//.length Cantidad de Caracteres de una variable
document.write("<br>",a.length);

//------------------------------
var a = 'Hola a todos mis amigos de youtube';
//.search() metodo de variable que permite localizar una palabra en un cadena de
//texto
document.write("<br>",a.search("mis"));

//------------------------------
var a = 'Hola a todos mis amigos de youtube';
//indexOf() metodo de variable que retorna la pocicion exacta de la primera
//palabra encontrada
document.write("<br>",a.indexOf("mis"));
//------------------------------
var a = 'Hola a todos mis amigos de youtube, \n\
todos estamos alegres';
//lastIndexOf() metodo de variable que retorna la pocicion exacta de la ultimapa
//palabra encontrada
document.write("<br>",a.lastIndexOf("todos"));

//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//match() metodo de variable que retorna un array de todas la palabras
//que se encontraron 

var b = a.match(/todos/gi);
document.write("<br>",a.match(/todos/gi));
document.write("<br>",b);
//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//substr() metodo de variable que retorna una cadena desde la posision asignada 
//hasta la ultima posision asignada 
document.write("<br>",a.substr(5,10));
//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//substring() metodo de variable que retorna una cadena desde la posision inicial 
//hasta la ultima posision asignada desde la pocicion inicial
document.write("<br>",a.substring(5,11));
//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//charAt() metodo de variable que retornaun caracter el la pocicion asignada
document.write("<br>",a.charAt(8));
//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//.startsWith("Cadena") metodo de variable que retorna si en verdad empieza la cadena con
//con esta cadena
document.write("<br>",a.startsWith("Hola"));
//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//.endsWith("Cadena") metodo de variable que retorna si en verdad termina la cadena con
//con esta cadena
document.write("<br>",a.endsWith("Hola"));
//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//.includes("Cadena") metodo de variable que encuentra una relacion en las 
//palabras y si existe o no 
document.write("<br>",a.includes("amigos"));
//------------------------------
var a = "Hola a todos mis amigos de youtube, \n\
todos estamos alegres... todos";
//.includes("Cadena",10) metodo de variable que encuentra una relacion en las 
//palabras y si existe o no en el rango de 0 a la cantidad asignada
document.write("<br>",a.includes("amigos",10));

/*
 * Propiedades = .length
 * 
 * Metodos = search() + .indexOf() + .lastIndexOf() + .substr() + .substring()
 * 
 */
//
//----------------------------------------------
//-----------------------------
var a = "Hola a todos <br>";
//.repeat(10) metodo de variable que te permite repetir la cadena hasta la cantidad asignada
document.write("<br>",a.repeat(10));
//-----------------------------
var a = "Hola a todos <br>";
//.replace("todos","mis amigos") metodo de variable que te permite remplasar una cadena existente por otra nueva
document.write("<br>",a.replace("todos","mis amigos"));
//-----------------------------
var a = "Hola a todos <br>";
//.slice(5) metodo de variable que te permite leer la cadena desde la posision asignada
document.write("<br>",a.slice(5));
//-----------------------------
var a = "Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo";
//.split(",") metodo de variable que te permite generar un array y separar los objetos con dicho caracter
document.write("<br>",a.split(","));
console.log(a.split(","));
//-----------------------------
var a = "          Hola a todos mis amigos     ";
//.trim(",") metodo de variable que te permite los espacios de caracteres sobrantes
document.write("<br>",a.trim());
//-----------------------------
var a = "Hola a todos mis amigos";
//.toLowerCase() metodo de variable que te permite que las cadenas de caracteres
//sean minusculas
document.write("<br>",a.toLowerCase());
//-----------------------------
var a = "Hola a todos mis amigos";
//.toUpperCase(",") metodo de variable que te permite que las cadenas sean 
//Mayusculas
document.write("<br>",a.toUpperCase());
//-----------------------------
var a = "Hola a todos mis amigos ";
var uno = "Hola a todos";
var dos = " mis amigos ";
var tres = "que ven mis videos";
//.toUpperCase(",") metodo de variable que te permite que las cadenas sean 
//minusculas
document.write("<br>",a.concat(uno,dos,tres));
//-----------------------------
var a = "Youtube";
//Concatenacion por el metodo de comilla frances
document.write("<br>",`Hola mis amigos de ${a} que me segigue en mi canal`);
