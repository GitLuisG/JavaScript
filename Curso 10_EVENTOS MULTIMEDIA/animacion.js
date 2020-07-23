/*
    20. EVENTOS MULTIMEDIA  -  03:27:49
    - Play
    - Ended
    - Seeking 
 */
var primero = document.querySelector(".uno");

primero.addEventListener("play", function(){
alert("Pusistes play");    
});
primero.addEventListener("ended", function(){
alert("Fin del video");    
});
primero.addEventListener("seeking", function(){
alert("Adelantastes ");
alert(this.currentTime);
});