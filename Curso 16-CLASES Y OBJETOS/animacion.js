/*
 26. CLASES Y OBJETOS  -  05:39:08
 - Propiedades y métodos
 - Clases 
 - Objetos
 - Instanciación 
 - Herencia 
 */
/*
OBJETO{
    PROPIEDADES (VARIABLES)
    -CABEZA
    -PATAS
    -COLA
    METODOS(FUNCIONES)
    -MAULLIAR
    -CAMINAR
    -SALTAR
}*/
//metodo antiguo
function Gato(nombre, edad, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.correr = function(){
        document.write(" El gato ",nombre," corre");
    };
}

var Gato1 = new Gato("Peludo", 4, 3);
var Gato2 = new Gato("Manchas", 7, 4);

document.write(Gato2.edad);
Gato1.correr();

//-------------------------
class Gato{
    
  constructor(nombre,edad,peso){
      this.nombre = nombre;
      this.edad = edad;
      this.peso = peso;
  };
  
  correr(){
        document.write(" El gato ",this.nombre," corre");
  };
  
};

var Gato1 = new Gato("Peludo", 4, 3);
var Gato2 = new Gato("Manchas", 7, 4);
document.write(Gato2.edad);
Gato1.correr();

//---------------
class Animal{
    constructor(tipo, raza){
        this.cero = tipo;
        this.raza = raza;
    };
};

class Domesticos extends Animal{
    constructor(cero, nombre, edad, peso){
        super(cero);
        this.uno = nombre;
        this.dos = edad;
        this.tres = peso;
    };
};

var animal1 = new Domesticos("Hogar", "Boby", 8, 6);

var unico = new Animal("Salvaje", "pura");

document.write(unico.cero);
