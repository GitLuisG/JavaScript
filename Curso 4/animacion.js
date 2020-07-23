//Operadores Asignacion
var uno = 20;

uno = uno + 10;

document.write(uno,"<br>");

uno += 20;

document.write(uno,"<br>");

uno = uno - 10;

document.write(uno,"<br>");

uno -= 20;

document.write(uno,"<br>");

uno *= 20;

document.write(uno,"<br>");

uno /= 20;

document.write(uno,"<br>");

document.write(uno==dos ? "ES IGUAL ": "NO ES IGUAL");

//CONDICIONALES  
var uno = 3;

var dos = 3;

/* 
 * if
 * if - else
 * if - else if - else
 * switch
 */

if(uno == dos){
    document.write("<br>","Es Igual","<br>");  
};

switch(uno){
    case 0:
        dos = "Cero";
        break;
    case 1:
        dos="UNO";
        break;
    case 2:
        dos="dos";
        break;
    case 3:
        dos="TRES";
        break;
     case 4:
        dos="Cuatro";
        break;
    case 5:
        dos="Cinco";
        break;
    default:
        dos = "NINGUNO";
        break;
}
document.write("<br>",dos);