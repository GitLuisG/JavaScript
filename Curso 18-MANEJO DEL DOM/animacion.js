/*
 28. MANEJO DEL DOM  -  06:51:36
 - querySelector 
 - getElement 
 - Modificar contenido html
 - Modificar propiedades html
 - Modificar estilos css
 */
//modificar mediante css
var uno = document.querySelector(".primero");

uno.style.color="red";
//modificar mediante id
var uno = document.querySelector("#Dos");

uno.style.color="red";
//modificar mediante css dentro
var uno = document.querySelector(".tercero h1");
uno.style.color="red";

//modificar mediante class
var uno = document.querySelector(" a[class='Vinculo']");
uno.style.color="green";

//modificar mediante por arreglo
var uno = document.querySelectorAll("p")[1];
uno.style.color="green";

//modificar mediante get element id
var uno = document.getElementById("tres");
uno.style.color="green";

//modificar mediante get element class
var A = document.getElementsByClassName("cuarto")[0];
A.style.color="blue";

//modificar mediante get element
var A = document.getElementsByTagName("p")[2];
A.style.color="Blue";
A.innerHTML += "Nuevo Texto";

//modificar mediante get element name class Css
var A = document.getElementsByClassName("primero")[0];
A.className = A.className.replace("primero", "otra");
A.style.color = "green";
A.style.border = "1px solid red";
A.style.FontFamily = "Arial";
A.style.fontSize = "45px";

function fondo(color){
    if(color == "rojo"){
        A.style.backgroundColor = "red";
    } 
    if(color == "verde"){
        A.style.backgroundColor = "green";
    }
    if(color == "azul"){
        A.style.backgroundColor = "blue";
    }
}
