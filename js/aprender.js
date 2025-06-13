console.log("hola profe")
//alert("hola profe")
//document.body.innerHTML = "<h1> hola querido profe</h1>"
//document.body.innerText = "<h1> hola querido profe</h1>" 

// ######## VARIABLE EN JS => var, const
const edad = 18;
let edad_dos =18;
var nombre ="Edwin Quinetro"

edad_dos = edad_dos + 2;
// ########  tipo de datos entero/decimal, string, booleanos, arrays
var entero = 28;
var decimal = 20.5
var string = "MI NOMBRE ES EDWIN"
var boolean = true//false
var array_string = ["lun", "mar", "mie", "jue", "vie", "sa", "dom"];
var array_numerico = [1,2,3,4,5,6,7];
var array_mixto = [1,2,3, "lun", "mar", "mie",true,false];


// ########  tipo de variables pascalcasa, camelcase, snake_casa 

// ######## oparadores aritmeticos => +, -, /,*,%
var suma = entero + decimal;
var resta = decimal + entero;
var multi = decimal + entero;
var divi = decimal + entero;
var modulo = decimal % 2;

//######## operadores de comparacion

// ######## Estructura De Control => de repeticion (bucles), de condicion (ales)
// inicializador - comparacion - contador
console.log(array_string) 
console.log(array_string.length)
var impresion = "";
for (let i = 0; i < array_string.length; i++){
 console.log(array_string[i])   
 impresion = impresion + array_string[i]
 }
Swal.fire(impresion);

//para imprimir 
console.log(modulo)
