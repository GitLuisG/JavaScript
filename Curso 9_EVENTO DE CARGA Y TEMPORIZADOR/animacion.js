/*
 19. EVENTO DE CARGA Y TEMPORIZADOR  -  03:18:17
 - Load
 - Setinterval
 - Settimeout 
 */

window.addEventListener("load",function(){alert("YA CARGO");});

var tiempo = setInterval(
        function()
{
    document.write("Texto de ejemplo <br>");
},
2000
        );

setTimeout(function()
{
    document.write("Es Otro Texto");
},3);