//Operadores Relacionales
var uno = 20;
var dos = 10;
//monor
document.write(uno < dos,"<br>");
//mayor
document.write(uno > dos,"<br>");
//menor igual
document.write(uno <= dos,"<br>");
//mayor igual
document.write(uno >= dos,"<br>");
//igual igual
document.write(uno == dos,"<br>");
//diferente de
document.write(uno != dos,"<br>");

/*
 * Y = &&
 * O = ||
 * negacion = !
 */

    document.write(uno==dos && uno>dos,"<br>");
    
    document.write(uno==dos || uno>dos,"<br>");
    
    document.write(!(uno==dos || uno>dos,"<br>"));
    
    if(!(a == true && a == ""))
    {
        document.write("True");
    }else
    {
        document.write("False");
    }