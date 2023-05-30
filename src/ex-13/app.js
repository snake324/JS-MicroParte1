//Ejercicio de JavaScript 1

//Escribir un programa que escriba en pantalla los divisores de un número dado
//El resultado -> Los divisores de son:

//Hay que vincular el archivo js con el html
//Hay que vicular el archivo css con el html

// Pedir al usuario un número
let numero = parseInt(prompt('Ingresa un número:'));

// Mostrar los divisores del número
console.log('Los divisores de', numero, 'son:');
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}