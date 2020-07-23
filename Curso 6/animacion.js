//FUNCIONES  

function uno(){
    var saludo = document.write("Hola a todos <br>");
    return saludo;
};

function dos(a, b, c)
{
    var datos = document.write("Mi Nombre es: ", a, " mi apellido es: ", b, " Mi edad: ", c);
    return datos;
};

function Tres(nombre="")
{
    var nombreCompleto = nombre;
    return document.write("<br>",nombreCompleto);
}

function Cuatro(nombre, apellido){
    if(nombre != null && apellido != null){
        respuesta = document.write("<br>", nombre," ", apellido);
    }else{
        respuesta = document.write("<br>","No se puso los datos");
    }
    return respuesta;
}

function Cinco(...meses){
    document.write("<br>"); 
    for(let uno of meses){
       document.write(uno+"<br>"); 
    }
    //return document.write(meses);
}

function seis(nombre, precio, peso){
    return "Nombre "+ nombre +"<br>Presio:"+ precio +"<br>Peso: "+ peso;
}

uno();
dos("Luis", "Gerardo", 20);
Tres("Luis Gerardo Perales Torres");
Cuatro("Luis", "Gerardo");
Cinco("Luis", "Gerardo", "Perales", "Torres");
var primero = ['Soldado', 25, 21];
document.write(seis(...primero));

var siete = function(){
    resultado="Holatodos";
    return resultado;
};

document.write("<br>", siete());

//funciones anonimas
var siete = function(){
    resultado = "Hola a tods";
    return resultado;
};
document.write("<br>", siete());

var a = function(nombre, uno){
    var e= nombre; 
    uno(e);
};
var b = function(i){
    document.write(i);
};
a("<br>Kosaka",b);

//------------
/*
 * function uno(nombre){
    return nombre;
}
 */

var uno = nombre => nombre;
var dos =(nombre, apellido)=>nombre + apellido;

document.write(uno("<br>Bistec"));
document.write(dos("<br>Bistec ", "Asado"));