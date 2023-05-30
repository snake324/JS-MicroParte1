//Ejercicio de JavaScript 1

//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//El resultado -> Es divisible por 2, 3, 5 o 7

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Pedir al usuario un número
let numero = prompt('Ingresa un número:');

// Verificar si es divisible por 2, 3, 5 o 7
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
  console.log('El número es divisible por 2, 3, 5 o 7');
} else {
  console.log('El número no es divisible por 2, 3, 5 ni 7');
}