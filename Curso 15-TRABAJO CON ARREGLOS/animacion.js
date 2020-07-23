/*
 25. TRABAJO CON ARREGLOS  -  05:07:58
 - Length 
 - push
 - pop
 - join
 - split 
 - array.from
 - sort 
 - reverse 
 - for in 
 - forEach 
 - find 
 - findIndex 
 - filter 
 - some 
 */

var uno = [10, 20, 30, 40, 50];
//length regresa la cantidad de objetos que se encuentra en el array
document.write( uno.length,"<br>" );
//-------------------
var uno = [10, 20, 30, 40, 50];
//push() Ingresa un nuevo valor al array existente
uno.push(60);
uno.push(70);
uno.push(80);
uno.push(90);
document.write( uno,"<br>" );
//----------------
var uno = [10, 20, 30, 40, 50];
//pop() Regresa el ultimo valor del array 
document.write( uno.pop(),"<br>" );
//----------------
var uno = [10, 20, 30, 40, 50, "Lunes"];
//join() Regresa una cadena de string convierte de array a string 
document.write( uno.join(),"<br>" );
//----------------
var uno = "10, 20, 30, 40, 50, Lunes";
//split() Covierte una cadena a Array
document.write( uno.split(","),"<br>" );
//console.log( uno.split(","));
//----------------
var semana = Array.from(document.querySelectorAll(".dias p"),);
var creacion = semana.map(dia => dia.textContent);
//Array.from()Convierte una parte del html y lo pasa a un array
console.log(creacion);
//---------------------
var semana = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
//sort() ordena de orden alfabetico por abecedario
document.write(semana.sort(),"<br>" );
//---------------------
var semana = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
//reverse() ordena el array al reves
document.write(semana.reverse(),"<br>" );
//---------------------
var uno = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
//for in recore el array completo
for(let i in uno){
    document.write( uno[i],"<br>" );
}
//---------------------
var uno = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
//forEach recore el array completo
uno.forEach(
        (dos,i) => document.write(i + " - " + dos + "<br>")
        );

//---------------------
var uno = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
//find busca una cadena dentro de un array y la devuelve un string
var buscar = uno.find(dos => dos=="Martes");

document.write(buscar,"<br>");
//---------------------
var uno = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
//findIndex busca una cadena dentro de un array y la devuelve la pocicion en numero
var buscar = uno.findIndex(dos => dos=="Martes");

document.write(buscar,"<br>");
//---------------------
var uno = ["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
//filter() busca una cadena dentro de un array y la devuelve todas las encontradas
var buscar = uno.filter(dos => dos=="Martes");

document.write(buscar,"<br>");
//---------------------
var uno = [10,20,30,40,50,60,70,80,90,100]
//some regresa si hay valores menores a el numero dicho
var buscar = uno.some(dos => dos < 50);
document.write(buscar,"<br>");