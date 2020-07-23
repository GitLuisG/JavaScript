/*
 21. CUADROS DE DIÁLOGOS Y VENTANAS  -  03:35:09
 - Alert 
 - Confirm 
 - Prompt
 */
var saludo = "Hola a todos \n como estan";
alert(saludo);

a = confirm("Necesita ayuda?");
if(a){
    window.location="Ayuda.html";
    document.write("Dijo que Si");
}else{
    document.write("Dijo que No");
}

var a = prompt("Nombre Completo?");
if(a){
    document.write("Tu Nombre es: "+a);

}else if(a==null){
    document.write("usted puso Cancelar");
}else{
    document.write("Usted no puso Nada");
}
