let a = 10;
let b = 5;
//             true  && true
console.log( 10 == a && b > 0 );


console.log(a > 0);
if ( a > 0 ) {
   console.log(`El valor ${a} es mayor de 0`);
};

a = -10;

console.log(a > 0);
if ( a > 0 ) {
   console.log(`El valor ${a} es mayor de 0`);
}
else {
   console.log(`El valor ${a} es menor de 0`);
}

// Sentencia if else if else if
a = 0;

console.log(a > 0);
if ( a > 0 ) {
   console.log(`El valor ${a} es mayor de 0`);
}
else if (a < 0) {
   console.log(`El valor ${a} es menor de 0`);
}
else if ( a == 0) {
   console.log(`El valor ${a} es igual a 0`);
}

// Otro tipo de condicional Switch
let dia = 10;

switch(dia) {
   case 1:
      console.log('Hoy es lunes');
      break;
   case 2:
      console.log('Hoy es martes');
      break;
   case 3:
      console.log('Hoy es miercoles');
      break;
   case 4:
      console.log('Hoy es jueves');
      break;
   case 5:
      console.log('Hoy es viernes');
      break;
   case 6:
      console.log('Hoy es sabado');
      break;
   case 7:
      console.log('Hoy es domingo');
      break;
   default:
      console.log('No ingreso un día de la semana');
      break;
};

//while
let numero = 5, aux = 0;

/* while ( aux != 0 ) {
   console.log(numero);
   aux = aux + 1;
   aux += 1;
   aux++;
};
*/

let numerico, suma = 0;
numerico = prompt('Ingrese un número distinto de 0');

while(numerico != 0) {
   numerico = parseFloat(prompt('Ingrese un número '));
//console.log(typeof numerico);
   suma = suma + numerico;
   console.log("Aquí va el texto", numerico,suma);
   console.log('Aquí va el texto'+ numerico + suma);
   console.log(`Nuevo valor ingresado es ${numerico}`)
}
console.log(`Resultado de todos los números ingresados ${suma}`);

let arreglo = [];

arreglo[0] = 5;
arreglo[3] = 8;
arreglo[4] = 'palabra';

console.log(`Elemento 1 [0]: ${arreglo[0]}`); 
console.log(`Elemento 2 [1]: ${arreglo[1]}`); 
console.log(`Elemento 3 [2]: ${arreglo[2]}`); 

for(let aux=0; aux < arreglo.length; aux++) {
   console.log(`Elemento [${aux}]: ${arreglo[aux]}`);   
};

//Funciones

function sumar(parametro1, parametro2) {
    let resultado;
    resultado = parametro1 + parametro2;
 }

alert('Ingresar valores para realizar una suma')
for(let aux=0; aux < 1; aux++) {
   a = Number(prompt("Ingresar valor"));
   b = Number(prompt('Ingresar otro valor'));
   sumar(a,b); //argumento
}

console.log(`El valor de la suma es ${aux}`);  

function cambiarVariable(parametro) {
    parametro = 20;
    console.log(parametro);
 }
 
 let argumento = 10;
 
 cambiarVariable(argumento);
 
 console.log(argumento);
 
 //----------
 let variableGlobal = 'Saludo';
 
 function cambiarValor(variableLocal) {
    variableLocal = 'Hola';
    variableGlobal = 'Nuevo Saludo';
 }
 
 console.log(variableGlobal);
 
 cambiarValor(variableGlobal);
 
 console.log(variableGlobal);
 
 // Operadores Ternarios
//condicion? true : false
let varA = 3;

(varA == 1)? console.log('El valor es igual a 10') : console.log("El valor es diferente de 10");


document.querySelector("html body h1");

document.getElementById('ident');

//devuelve un array de objetos
document.getElementsByClassName('clase')[0];

document.getElementsByName('nameH1')[0];

document.getElementsByTagName('h1')[0];
