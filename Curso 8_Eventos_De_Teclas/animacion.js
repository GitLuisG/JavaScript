/*
 *  18. EVENTOS DE TECLADO  -  03:09:41
 - Keydown
 - Keypress
 - Keyup
 */

window.addEventListener("keydown", function(){
    alert("Apretar una tecla");
});
window.addEventListener("keypress", function(){
    alert("mantener tecla apretada");
});
window.addEventListener("Keyup", function(){
    alert("Cuando deje de apretar la tecla");
});

window.addEventListener("keypress", function(event){
    alert(event.keyCode);
    alert(String.fromCharCode(event.keyCode));
});
