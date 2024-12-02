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
}