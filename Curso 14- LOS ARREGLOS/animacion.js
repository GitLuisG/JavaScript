/*
  24. LOS ARREGLOS  -  04:49:43
 - Unidimensiones 
 - Muldimencionales
 */
//Unidimensiones
var semana = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");
var Semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

document.write(semana[4],"<br>");

//Muldimencionales
var uno = 
[   
100,
[10,20,30,40,
    [9,8,7,6,5]], 
[11,22,33,44,55], 
[12,33,26,37,54],
200
];
document.write(uno,"<br>");
document.write(uno[1],"<br>");
document.write(uno[1][0],"<br>");
document.write(uno[4],"<br>");
document.write(uno[0],"<br>");
document.write(uno[1][4][3],"<br>");



